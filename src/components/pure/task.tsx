import { useEffect } from "react";
import { Task } from "../../constructors/task.constructor";

//Importing styles
import "../../styles/taskList.css";
import "../../styles/task.css";
import 'font-awesome/css/font-awesome.min.css';
import { useHooks } from "../../hooks";

interface Props {
	task: Task,
	deleteTask: (taskId: number) => void,
	changeCompleted: (id: number) => void,
	// modifyTasks: () => void,
}

const TaskComponent = ({deleteTask, task, changeCompleted}: Props) => {

	return (
		<li className="tasks__item">
			<p className="tasks__item-text">
				{task.name}
			</p>
			<p className="tasks__item-text">
				{task.description}
			</p>
			<div className={`tasks__item-level-container tasks__item-level-container--${task.level}`}>
				<p className="tasks__item-text">
					{task.level}{/*By the name it can be known its urgency*/}
				</p>
			</div>

			<label className="switch">
				{/* <input type="checkbox" id="checker" className="switch__checker"/> */}
				<label className={`switch__slider ${task.completed && "switch__slider--checked"}`} htmlFor="checker" onClick={() => changeCompleted(task.id)}></label>
			</label>
			{/* <p className="tasks__item-text">
				{task.completed? "completed": "pending"}
			</p> */}
			<i className="fa-solid fa-trash-can" onClick={() => deleteTask(task.id)}/>
		</li>
	);
};

export { TaskComponent };
