import { TaskListComponent } from "../../components/container/taskList";
import { TaskForm } from "../../components/pure/forms/taskForm";
import { Task } from "../../constructors/task.constructor";
import { TasksLS } from "../../constructors/tasks.LS.constructor";

import { useTask } from "../../hooks/useTask";
import { useLoading } from "../../hooks/useLoading";
import { DataLS } from "../../constructors/data.LS.constructor";

interface Props {
	taskLS: TasksLS,
	logged: boolean,
	dataLS: DataLS,
}

const defaultLoading: boolean = true;

const defaultTasks: Task[] = [
	// new Task("Example1", "Default description1", 1,LEVELS.normal, false),
	// new Task("Example2", "Default description2", 2,LEVELS.blocking, true),
	// new Task("Example3", "Default description3", 3,LEVELS.normal, false),
	// new Task("Example4", "Default description4", 4,LEVELS.urgent, false),
	// new Task("Example5", "Default description5", 5,LEVELS.blocking, true),
	// new Task("Example6", "Default description6", 6,LEVELS.blocking, false),
];

const TasksPage = (
	{
		taskLS,
		logged,
		dataLS,
	}: Props
	) => {

	const {
		addTask,
		changeCompleted,
		deleteTask,
		tasks
	} = useTask({defaultTasks});

	const {
		loading,
		updateLoading
	} = useLoading({defaultLoading});

	return (
		<div>
			<TaskListComponent
				deleteTask={deleteTask}
				loading={loading}
				updateLoading={updateLoading}
				tasks={tasks}
				changeCompleted={changeCompleted}
				addTask={addTask}
				taskLS={taskLS}
				logged={logged}
				dataLS={dataLS}
			/>
			<TaskForm
				addTask={addTask}
				tasks={tasks}
				taskLS={taskLS}
				dataLS={dataLS}
			/>
		</div>
	);
}

export { TasksPage }
