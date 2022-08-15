// import * as React from 'react';

import { useState } from "react";
// import { boolean } from "yup";

interface Props {
}

const defaultLogged: boolean = false;

const useLogged = (
// 	{

// }: Props
) => {

	const [logged, setLogged] = useState<boolean>(defaultLogged);

	const toggleLogged = (): void => {
		setLogged(!logged);
	}

	return {
		logged,
		toggleLogged,
	};
}

export {
	useLogged,
}
