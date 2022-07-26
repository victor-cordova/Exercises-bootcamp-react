import React, { useRef } from "react";
import { TaskListComponent } from "./components/container/taskList";
import { TaskForm } from "./components/pure/forms/taskForm";
import { useHooks } from "./hooks";

const App = () => {

	const {
		addTask,
		tasks,
		deleteTask,
		updateLoading,
		changeCompleted,

	} = useHooks();

	return (
			<React.Fragment>
				<TaskListComponent
					deleteTask={deleteTask}
					updateLoading={updateLoading}
					tasks={tasks}
					changeCompleted={changeCompleted}
				/>
				<TaskForm
					addTask={addTask}
					tasks={tasks}
				/>
			</React.Fragment>
	)
}
// export const numero = 5;

export {App}
