import "../../styles/taskList.css";

import { useHooks } from "../../hooks";

import { useEffect } from "react";
import { Task } from "../../constructors/task.constructor";
import { LEVELS } from "../../models/levels.model";
import { ITask } from "../../models/task.model";
import { TaskComponent } from "../pure/task";

interface Props {
    // children: JSX.Element
	tasks: Task[]
	deleteTask: (id: number) => void,
	loading: boolean,
	updateLoading: () => void,
	changeCompleted: (id: number) => void,
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

const TaskListComponent = ({tasks, deleteTask, loading, updateLoading, changeCompleted}: Props) => {
	useEffect(() => {
		// console.log("Component has been updated")
		setTimeout(() => {
			updateLoading();
		}, 100);
		return () => {
		}
	}, []);

	taskTable = () => {
		// console.log(tasks.length);
		if (tasks.length && !loading) {
			return (
				<ul className="tasks__container">
					{tasks.map((task, index) => (
						<TaskComponent
							task={task}
							key={index}
							deleteTask={deleteTask}
							changeCompleted={changeCompleted}
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
