import { useState } from "react";

// const defaultLoading: boolean = true;

export interface Props {
	defaultLoading: boolean
}

const  useLoading = ({defaultLoading}: Props) => {
	const [loading, setLoading] = useState<boolean>(defaultLoading);

	const updateLoading = () => {
		setLoading(!loading);
	}

	return {
		loading,
		updateLoading,
	};
}

export { useLoading };
