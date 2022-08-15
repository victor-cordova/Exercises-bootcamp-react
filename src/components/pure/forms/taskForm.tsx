import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import { Task } from "../../../constructors/task.constructor";
import { TasksLS } from "../../../constructors/tasks.LS.constructor";
import * as Yup from "yup";
import { PRIORITIES } from "../../../models/priorities.enum";
import { createId } from "../../../utils";
import { DataLS } from "../../../constructors/data.LS.constructor";
import { CreateTaskDto } from "../../../models/task.dto";

export interface Props {
	tasks: Task[],
	addTask: (newTask: Task) => void,
	taskLS: TasksLS,
	dataLS: DataLS,
}

const initialValues: CreateTaskDto = {
	name: "",
	description: "",
	priority: PRIORITIES.normal,
}

const tooShort: string = "too short."
const tooLong: string = "too long."
const isRequired: string = "is required."

const taskSchema = Yup.object({
	name: Yup.string()
		.min(2, `Title ${tooShort}`)
		.max(12, `Title ${tooLong}`)
		.required(`Title ${isRequired}`),
	description: Yup.string()
		.min(2, `Description ${tooShort}`)
		.max(12, `Description ${tooLong}`)
		.required(`Description ${isRequired}`),
	priority: Yup.string()
		.oneOf([PRIORITIES.normal, PRIORITIES.urgent, PRIORITIES.blocking], "Must select a priority: Normal / Urgent / Blocking")
		.required(`Priority ${isRequired}`),
})

const TaskForm = ({addTask, taskLS, dataLS}: Props) => {

	const createTask = (values: CreateTaskDto, actions: FormikHelpers<CreateTaskDto>) => {
		actions.setSubmitting(false);
		const priority: PRIORITIES = PRIORITIES[values.priority as keyof typeof PRIORITIES];
		const task = new Task(values.name, values.description, createId(), priority, false);

		addTask(task);
		taskLS.addData(task);
		dataLS.updateUserTasks(taskLS.getData());
	}

	return (
		<Formik
			initialValues={ initialValues }
			validationSchema={ taskSchema }
			onSubmit={createTask}
		>
			{ props => (
				<form onSubmit={props.handleSubmit}>
					<label htmlFor="name">Task name</label>
					<Field
						placeholder="Insert name"
						type="text"
						id="name"
						name="name"
					/>
					{props.errors.name && <ErrorMessage name="name" component="div"/>}

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
