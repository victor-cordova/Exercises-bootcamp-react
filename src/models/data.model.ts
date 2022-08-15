// import { ROLES } from "./roles.model";

import { Task } from "../constructors/task.constructor";
import { DataUser } from "./data-user.model";
// import { ITask } from "./task.model";

export interface Data {
	user: DataUser,
	logged: boolean,
	data: Task[],
}
