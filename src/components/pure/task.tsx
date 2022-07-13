import { useEffect } from "react";
import { Task } from "../../constructors/task.constructor";

//Importing styles
import "../../styles/task.css";

interface Props {
	task: Task,
}

const TaskComponent = ({task}: Props) => {

	//Component's lifecycle
	useEffect(() => {
		console.log("Created task")
		return () => {
			console.log(`Task: ${task.name} will be unmounted.`)
		}
	}, [task]);

	return (
		<div className="task">
			<h3 className="task__text">
				Name: {task.name}
			</h3>
			<p className="task__text">
				Description: {task.description}
			</p>
			<h3 className="task__text">
				Level: {task.level}{/*By the name it can be known its urgency*/}
			</h3>
			<h3 className="task__text">
				This task is: {task.completed? "completed": "pending"}
			</h3>
		</div>
	);
};

export { TaskComponent };
