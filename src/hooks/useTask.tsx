import { useState } from "react";
import { Task } from "../constructors/task.constructor";

interface Props {
	defaultTasks: Task[],
}

const useTask = ({ defaultTasks }: Props) => {

	//Component's state
	const [tasks, setTasks] = useState<Task[]>(defaultTasks);

	const changeCompleted = (id: number) => {
		const updatedTasks = tasks.map(task => {
			if (task.id === id) {
				return new Task(task.name, task.description, task.id, task.level, !task.completed);
				// {

				// 	...task,
				// 	completed: !task.completed,
				// }
			}
			return task;
		});
		setTasks(updatedTasks);
		// console.log(updatedTasks);
		// console.log("TODO: Cambiar el estado de una tarea.")
	}

	const deleteTask = (id:number) => {

		const filteredTasks = tasks.filter(task => task.id !== id);

		setTasks(filteredTasks)
	}

	const addTask = (newTask: Task) => {
		const updatedTasks: Task[] = [
			...tasks,
			newTask,
		]

		setTasks(updatedTasks)
	}

	return {
		tasks,
		deleteTask,
		addTask,
		changeCompleted,
	}
}

export { useTask };
