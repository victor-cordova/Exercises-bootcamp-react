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
	updateLoading: () => void,
}

const TaskListComponent = ({tasks, deleteTask, updateLoading}: Props) => {

	useEffect(() => {
		// console.log("Component has been updated")
		updateLoading();
		console.log("new render1")
		return () => {
			// console.log("The component will be unmounted.")
		}
	}, [tasks]);
	console.log("new render2")

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
				<ul className="tasks__container">
					{tasks.map((task, index) => (
						<TaskComponent task={task} key={index} deleteTask={deleteTask}/>
					))}
				</ul>
			</div>
		</section>
	)
};

export { TaskListComponent };
