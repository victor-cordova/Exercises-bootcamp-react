import { ROLES } from "../models/roles.enum";

class User {
	constructor(
		public nickname: string,
		public email: string,
		public password: string,
		public user: string,
		public role: ROLES = ROLES.user,
	) {}
}

export { User }
