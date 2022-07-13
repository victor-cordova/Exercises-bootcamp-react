import { LEVELS } from "./levels.model";

export interface ITask {
	name: string,
	description: string,
	completed: boolean,
	level: LEVELS,
}
