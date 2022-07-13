// import * as React from 'react';
import { useState } from "react";
import { Credential } from "../../../models/credential.model";

export interface Props {
}

const defaultCredentials: Credential[] = [
	{
		user: "",
		password: "",
	}
]

const LoginForm = ({}: Props) => {

	const [credentials, setCredentials] = useState<Credential[]>(defaultCredentials);

	return (
		<div>

		</div>
	);
}
