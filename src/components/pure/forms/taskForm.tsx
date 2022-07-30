import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import { Task } from "../../../constructors/task.constructor";
import * as Yup from "yup";
import { LEVELS } from "../../../models/levels.model";

export interface Props {
	tasks: Task[],
	addTask: (newTask: Task) => void,
}

interface Data {
	key: string,
	value: string,
}

const initialValues = {
	title: "",
	description: "",
	priority: LEVELS.normal,
}

const tooShort: string = "too short."
const tooLong: string = "too long."
const isRequired: string = "is required."

interface ValuesI {
	title: string;
	description: string;
	priority: LEVELS;
}

function createId(): number {
	const max: number= 999999;
	const min: number= 10000;
	return Math.floor(Math.random() * (max - min) + min);
}

const taskSchema = Yup.object({
	title: Yup.string()
		.min(2, `Title ${tooShort}`)
		.max(12, `Title ${tooLong}`)
		.required(`Title ${isRequired}`),
	description: Yup.string()
		.min(2, `Description ${tooShort}`)
		.max(12, `Description ${tooLong}`)
		.required(`Description ${isRequired}`),
	priority: Yup.string()
		.oneOf([LEVELS.normal, LEVELS.urgent, LEVELS.blocking], "Must select a priority: Normal / Urgent / Blocking")
		.required(`Priority ${isRequired}`),
})

const TaskForm = ({tasks, addTask}: Props) => {

	const getData = (data: ValuesI) => {

		const totalData: Data[] = [
			{key: "title", value: data.title},
			{key: "description", value: data.description},
			{key: "priority", value: data.priority},
		];

		return totalData;
	}

	const createTask = (values: ValuesI, actions: FormikHelpers<ValuesI>) => {
		actions.setSubmitting(false);
		const newTask: Data[] = getData(values);
		const priority: LEVELS = LEVELS[newTask[2].value as keyof typeof LEVELS];
		const task = new Task(newTask[0].value, newTask[1].value, createId(), priority, false);

		addTask(task);
	}

	return (
		<Formik
			initialValues={ initialValues }
			validationSchema={ taskSchema }
			onSubmit={createTask}
		>
			{ props => (
				<form onSubmit={props.handleSubmit}>
					<label htmlFor="title">Task title</label>
					<Field
						placeholder="Insert title"
						type="text"
						id="title"
						name="title"
					/>
					{props.errors.title && <ErrorMessage name="title" component="div"/>}

					<label htmlFor="description">Description</label>
					<Field
						placeholder="Insert description"
						type="text"
						id="description"
						name="description"
					/>
					{props.errors.description && <ErrorMessage name="description" component="div"/>}

					<label htmlFor="priority">Priority</label>
					<Field name="priority" as="select" className="" id="priority">
						<option value="normal">Normal</option>
						<option value="urgent">Urgent</option>
						<option value="blocking">Blocking</option>
					</Field>

					<button type="submit">Submit</button>
				</form>
			)}
		</Formik>
	)
}

export { TaskForm };
