import { Task } from "../constructors/task.constructor";
import { LEVELS } from "../models/levels.model";
import { useLoading } from "./useLoading";
import { useTask } from "./useTask";

const defaultLoading: boolean = true;

const defaultTasks: Task[] = [
	new Task("Example1", "Default description1", 1,LEVELS.normal, false),
	new Task("Example2", "Default description2", 2,LEVELS.blocking, true),
	new Task("Example3", "Default description3", 3,LEVELS.normal, false),
	new Task("Example4", "Default description4", 4,LEVELS.urgent, false),
	new Task("Example5", "Default description5", 5,LEVELS.blocking, true),
	new Task("Example6", "Default description6", 6,LEVELS.blocking, false),
];

export interface Props {
}

const useHooks = () => {

	const {
		tasks,
		addTask,
		deleteTask,
	} = useTask({defaultTasks})

	const {
		loading,
		updateLoading
	} = useLoading({defaultLoading})

	return {
		tasks,
		addTask,
		deleteTask,

		loading,
		updateLoading,
	};
}

export { useHooks };
