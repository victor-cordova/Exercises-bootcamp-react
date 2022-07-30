import React, { useRef } from "react";
import { TaskListComponent } from "./components/container/taskList";
import { TaskForm } from "./components/pure/forms/taskForm";
import { useHooks } from "./hooks";

import { SignupForm } from "./components/pure/forms/loginFormik";
import { RegisterFormik } from "./components/pure/forms/registerFormik";

const App = () => {

	const {
		addTask,
		tasks,
		deleteTask,
		loading,
		updateLoading,
		changeCompleted,

	} = useHooks();

	return (
			<React.Fragment>
				<TaskListComponent
					deleteTask={deleteTask}
					loading={loading}
					updateLoading={updateLoading}
					tasks={tasks}
					changeCompleted={changeCompleted}
				/>
				<TaskForm
					addTask={addTask}
					tasks={tasks}
				/>

				{/* <SignupForm/> */}

				{/* <RegisterFormik/> */}
			</React.Fragment>
	)
}
// export const numero = 5;

export {App}
