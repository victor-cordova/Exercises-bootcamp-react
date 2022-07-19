import React, { useRef } from "react";
import { TaskListComponent } from "./components/container/taskList";
import { TaskForm } from "./components/pure/forms/taskForm";
import { Greetings } from "./components/pure/greetings";
import { Example1 } from "./hooks/example1";
import { Example2 } from "./hooks/example2";
import { useHooks } from "./hooks";

const App = () => {

	const {
		addTask,
		tasks,
		deleteTask,
		updateLoading,
	} = useHooks();

	return (
			<React.Fragment>
				<TaskListComponent deleteTask={deleteTask} updateLoading={updateLoading} tasks={tasks}/>
				<TaskForm addTask={addTask} tasks={tasks}/>
			</React.Fragment>
	)
}
// export const numero = 5;

export {App}
