import "../../styles/taskList.css";

import { useEffect } from "react";
import { Task } from "../../constructors/task.constructor";
import { TaskComponent } from "../pure/task";
import { TasksLS } from "../../constructors/tasks.LS.constructor";
import { DataLS } from "../../constructors/data.LS.constructor";

interface Props {
	tasks: Task[],
	deleteTask: (id: number) => void,
	loading: boolean,
	updateLoading: () => void,
	changeCompleted: (id: number) => void,
	addTask: (newTask: Task | Task[]) => void,
	taskLS: TasksLS,
	logged: boolean,
	dataLS: DataLS,
}

let taskTable: (() => JSX.Element) | null = null;

const loadingTable = () => {
	return (
		<div>
			<h2>Loading</h2>
		</div>
	)
}

const emptyTable = () => {
	return (
		<div>
			<h2>There are not tasks</h2>
			<h3>Please create some tasks</h3>
		</div>
	)
}

const TaskListComponent = ({
	tasks,
	taskLS,
	addTask,
	deleteTask,
	loading,
	updateLoading,
	changeCompleted,
	logged,
	dataLS,
}: Props) => {

	useEffect(() => {
		let taskData: Task[] = [];

		if (logged) {
			taskData = dataLS.getUserTasks();
			taskLS.addData(taskData);
		} else {
			taskData = taskLS.getData();
		}

			setTimeout(() => {
				addTask(taskData);
				updateLoading();
			}, 100);
		return () => {
		}
	}, []);

	const updateDataLS = () => {
		dataLS.updateUserTasks(taskLS.getData());
	}


	taskTable = () => {
		if (tasks.length && !loading) {
			return (
				<ul className="tasks__container">
					{tasks.map((task, index) => (
						<TaskComponent
							task={task}
							key={index}
							deleteTask={deleteTask}
							changeCompleted={changeCompleted}
							taskLS={taskLS}
							updateDataLS={updateDataLS}
						/>
					))}
				</ul>
			)
		} else if (!tasks.length && !loading) {
			return emptyTable();
		}
		return loadingTable();
	}

	return (
		<section className="task-list">
			<div className="task-list__title-container">
				<h2 className="task-list__title-text">
					Your tasks:
				</h2>
			</div>

			<div className="tasks">
				<ul className="tasks__header">
					<li className="tasks__header-text">
						<h3>Title</h3>
					</li>
					<li className="tasks__header-text">
						<h3>Description</h3>
					</li>
					<li className="tasks__header-text">
						<h3>Priority</h3>
					</li>
					<li className="tasks__header-text">
						<h3>Actions</h3>
					</li>
				</ul>
				{taskTable()}
			</div>
		</section>
	)
};

export { TaskListComponent };
