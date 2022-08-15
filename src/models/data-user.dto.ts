import { DataUser } from "./data-user.model";

interface UpdateDataUserDto extends Omit<DataUser, "id" | "role"> {
  // categoryId: string,
}

interface RegisterDataUserDto extends Omit<DataUser, "id"> {
  passwordConfirm: string,
}

interface LoginDataUserDto extends Omit<DataUser, "id" | "role" | "nickname"> {
  // passwordConfirm: string,
}


export {
	UpdateDataUserDto,
	RegisterDataUserDto,
	LoginDataUserDto
}
