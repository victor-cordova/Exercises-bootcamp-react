import { FormEvent, useRef } from "react";
import { Task } from "../../../constructors/task.constructor";
import { useTask } from "../../../hooks/useTask";
// import { useHooks } from "../../../hooks";
import { LEVELS } from "../../../models/levels.model";

export interface Props {
	tasks: Task[],
	addTask: (newTask: Task) => void,
}

interface Data {
	key: string,
	value: string,
}

const TaskForm = ({tasks, addTask}: Props) => {

	const formRef = useRef<HTMLFormElement>(null);
	const selectRef = useRef<HTMLSelectElement>(null);
	// console.log(formRef.current);


	const getData = () => {
		const totalData: Data[] = [];
		const data = new FormData(formRef.current as HTMLFormElement | undefined);
		// const keys: string[] = ["title", "description", "priority"];

		data.forEach((item, key) => {
			totalData?.push({key: key, value: item as string});

		})
		if (selectRef.current?.value) {
			totalData?.push({key: "priority", value: selectRef.current?.value});
		}

		// console.log(totalData)
		return totalData;
	}

	const isDataCompleted = (data: Data[]): boolean => {
		let isCompleted: boolean = true;
		data.forEach(item => {
			if (!item.value) {
				isCompleted = false;
			}
		})
		return isCompleted;
	}

	const createTask = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newTask: Data[] = getData();
		if (isDataCompleted(newTask)) {
			// console.log("asdasd")
			const lengthTaskPlusOne = tasks.length + 1;
			const priority: LEVELS = LEVELS[newTask[2].value as keyof typeof LEVELS];
			const task = new Task(newTask[0].value, newTask[1].value, lengthTaskPlusOne, priority, false);
			addTask(task);
		}
	}

	return (
		<form ref={formRef} id="taskForm" onSubmit={createTask}>
			<label htmlFor="title">Title</label>
			<input type="text" id="title" name="title"/>

			<label htmlFor="description">Description</label>
			<input type="text" id="description" name="description"/>

			{/* <label htmlFor="priority">Priority</label>
			<input type="text" id="priority" name="priority"/> */}
			<label htmlFor="priority">Priority</label>

			<select id="priority" form="taskForm" ref={selectRef}>
					<option value="normal">Normal</option>
					<option value="urgent">Urgent</option>
					<option value="blocking">Blocking</option>
			</select>

			<button type="submit">Button</button>
		</form>
	);
}

export { TaskForm };
