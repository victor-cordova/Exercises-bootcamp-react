import { BrowserRouter as Router,
	Link,
	Route,
	Routes,
	Navigate } from "react-router-dom";

import "../styles/main.css";

import { HomePage } from "../pages/home/home.page";
import { NotFoundPage } from "../pages/404/not-found.page";
import { TasksPage } from "../pages/tasks/tasks.page";
import { RegisterPage } from "../pages/auth/register.page";
import { LoginPage } from "../pages/auth/login.page";
import { ProfilePage } from "../pages/profile/profile.page";
import { AboutPage } from "../pages/about/about.page";
import { TaskPage } from "../pages/tasks/task.page";
import { useLoading } from "../hooks/useLoading";
import { TasksLS } from "../constructors/tasks.LS.constructor";
import { DataLS } from "../constructors/data.LS.constructor";
import { useEffect } from "react";
import { useLogged } from "../hooks/useLogged";
import React from "react";
import { createBrowserHistory } from 'history';

console.log("new render")

const dataLS = new DataLS("CREDENTIALS_LS");
const taskLS = new TasksLS("TASKS_LS");

const redirectTo = (path: string) => {
	createBrowserHistory().push(`/${path}`);
	window.location.reload()
}

const defaultLoading: boolean = false;

const App = () => {

	const {
		updateLoading,
	} = useLoading({defaultLoading});

	const {
		logged,
		toggleLogged,
	} = useLogged();

	useEffect(() => {
		if (dataLS.isLogged()) {
			toggleLogged();
		}
		setTimeout(() => {
			updateLoading();
		}, 100);

		return () => {
		}
	}, []);



	return (
		// @ts-ignore
		<Router history={createBrowserHistory()}>
			<div>
				<header>
					<nav className="header__nav">

						<Link to="/" >Home</Link>
						<Link to="/tasks">Tasks</Link>
						<Link to="/about">About</Link>

						{logged ?
							<React.Fragment>

								<Link to="/profile">Profile</Link>
								<Link to="/" onClick={ () => {
									dataLS.logout();
									toggleLogged();
									taskLS.addData([]);
								}
								}>Logout</Link>

							</React.Fragment>
							:
							<React.Fragment>

								<Link to="/register">Register</Link>
								<Link to="/login">Login</Link>

							</React.Fragment>
						}
					</nav>
				</header>

				<main>
					<Routes>

						<Route path="/" element={<HomePage/>}/>

						<Route path="/profile" element={
								logged ?
								<ProfilePage/>
								:
								<Navigate to="/login"/>
							}>
						</Route>

						<Route path="/about" element={<AboutPage/>} />
						<Route path="/tasks" element={

						<TasksPage
							taskLS={taskLS}
							logged={logged}
							dataLS={dataLS}
						/>
						} />

						<Route path="/tasks/:id" element={<TaskPage
							taskLS={taskLS}
						/>}/>

						<Route path="/register" element={
							logged ?
							<Navigate to="/"/>
							:
							<RegisterPage
								dataLS={dataLS}
								toggleLogged={toggleLogged}
								redirectTo={redirectTo}
							/>
						}/>

						<Route path='/login' element={
							logged ?
							<Navigate to="/"/>
							:
							<LoginPage
								dataLS={dataLS}
								logged={logged}
								toggleLogged={toggleLogged}
								redirectTo={redirectTo}
							/>
						}/>

						{/* 404 - Page not found */}
						<Route path="*" element={<NotFoundPage />}/>
					</Routes>
				</main>
			</div>
		</Router>
	)
}

export { App, dataLS };
