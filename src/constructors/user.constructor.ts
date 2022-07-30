import { ROLES } from "../models/roles.model";

class User {
	constructor(
		public name: string,
		public email: string,
		public password: string,
		public role: ROLES = ROLES.user,

	) {}
}

export { User }
