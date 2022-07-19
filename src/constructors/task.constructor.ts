import { LEVELS } from "../models/levels.model";

class Task {
	constructor (
		public name: string,
		public description: string,
		public id: number,
		public level: LEVELS, //With it can be know if it's urgent or not.
		public completed: boolean = false,
	){}


	public set newLevel(value : LEVELS) {
		this.level = value;
	}

}

export { Task };
