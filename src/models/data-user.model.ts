import { ROLES } from "./roles.enum";

export interface DataUser {
	nickname: string,
	id: number,
	email: string,
	password: string,
	role: ROLES,
}
