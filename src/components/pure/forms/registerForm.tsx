// import * as React from 'react';

import { useState } from "react";
import { IDataUser } from "../../../models/data-user.model";

export interface Props {
}

const defaultDataUsers: IDataUser[] = [
	{
		user: "",
		password: "",
		email: "",
		name: "",
	}
]

const RegisterForm = ({}: Props) => {

	const [dataUsers, setDataUsers] = useState<IDataUser[]>(defaultDataUsers)

	return (
		<div>

		</div>
	);
}

export { RegisterForm };
