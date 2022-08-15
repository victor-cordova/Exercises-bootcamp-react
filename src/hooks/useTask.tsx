import { useState } from "react";
import { Task } from "../constructors/task.constructor";

interface Props {
	defaultTasks: Task[],
}

const useTask = ({ defaultTasks }: Props) => {

	const [tasks, setTasks] = useState<Task[]>(defaultTasks);

	const changeCompleted = (id: number): void => {
		const updatedTasks = tasks.map(task => {

			if (task.id === id) {
				return new Task(task.name, task.description, task.id, task.priority, !task.completed);
			}

			return task;

		});
		setTasks(updatedTasks);
	}

	const deleteTask = (id:number): void => {

		const filteredTasks = tasks.filter(task => task.id !== id);

		setTasks(filteredTasks)
	}

	const addTask = (newTask: Task | Task[]): void => {
		const updatedTasks: (Task | Task[])[] = [
			...tasks,
			newTask,
		]
		const tasksFlated: Task[] = updatedTasks.flat();

		setTasks(tasksFlated);
	}

	return {
		tasks,
		deleteTask,
		addTask,
		changeCompleted,
	}
}

export { useTask };
