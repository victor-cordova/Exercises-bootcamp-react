import { Navigate, useParams } from "react-router-dom";
import { Task } from "../../constructors/task.constructor";
import { TasksLS } from "../../constructors/tasks.LS.constructor";

export interface Props {
	taskLS: TasksLS,
}

const TaskPage = ({taskLS}: Props) => {

	const { id } = useParams();
	const idConverted = Number(id);
	const task: Task | undefined = taskLS.getTask(idConverted);

	const taskUI = (task: Task) => {
		return (
			<div>
				<h1>Task - { id }</h1>
				<h2>{task.name}</h2>
				<h3>{task.description}</h3>
				<h3>{task.priority}</h3>
				<h3>{task.completed}</h3>
			</div>
		)
	}

	return (

		<div>
			{task? taskUI(task): <Navigate to="/"/>}
		</div>
	);
}

export { TaskPage };
