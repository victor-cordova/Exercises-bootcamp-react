import { Task } from "../../constructors/task.constructor";

//Importing styles
import "../../styles/taskList.css";
import "../../styles/task.css";
import 'font-awesome/css/font-awesome.min.css';
import { TasksLS } from "../../constructors/tasks.LS.constructor";

interface Props {
	task: Task,
	deleteTask: (taskId: number) => void,
	changeCompleted: (id: number) => void,
	taskLS: TasksLS,
	updateDataLS: () => void,
}

const TaskComponent = ({deleteTask, task, changeCompleted, taskLS, updateDataLS}: Props) => {

	return (
		<li className={`tasks__item tasks__item--${task.completed ? "completed":"pending"}`}>
			<p className="tasks__item-text">
				{task.name}
			</p>
			<p className="tasks__item-text">
				{task.description}
			</p>
			<div className={`tasks__item-level-container tasks__item-level-container--${task.priority}`}>
				<p className="tasks__item-text">
					{task.priority}{/*By the name it can be known its urgency*/}
				</p>
			</div>

			<label className="switch">
				{/* <input type="checkbox" id="checker" className="switch__checker"/> */}
				<label className={`switch__slider ${task.completed && "switch__slider--checked"}`} htmlFor="checker" onClick={() =>{
					changeCompleted(task.id);
					taskLS.updateData(task.id);
					updateDataLS();
				}}></label>
			</label>

			<i className="fa-solid fa-trash-can" onClick={() => {
				deleteTask(task.id);
				taskLS.deleteOneTask(task.id);
				updateDataLS();
			}}/>
		</li>
	);
};

export { TaskComponent };
