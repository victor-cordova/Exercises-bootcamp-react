import { LoginForm } from "../../components/pure/forms/loginFormik";
import { DataLS } from "../../constructors/data.LS.constructor";
import {  } from "react-router-dom";

interface Props {
	dataLS: DataLS,
	logged: boolean,
	toggleLogged: () => void,
	redirectTo: (path: string) => void,
}

const LoginPage = (
	{
		dataLS,
		logged,
		toggleLogged,
		redirectTo
	}: Props
	) => {

	return (
		<div>
			<h1>Loading page</h1>

			<LoginForm
				dataLS={dataLS}
				logged={logged}
				toggleLogged={toggleLogged}
			/>

			<button
			onClick={() => redirectTo("register")}
			>
				Go to register
			</button>
		</div>
	);
}

export { LoginPage }
