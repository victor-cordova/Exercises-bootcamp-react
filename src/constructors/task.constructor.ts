import { PRIORITIES } from "../models/priorities.enum";

class Task {
	constructor (
		public name: string,
		public description: string,
		public id: number,
		public priority: PRIORITIES, //With it can be know if it's urgent or not.
		public completed: boolean = false,
	){}

}

export { Task };
