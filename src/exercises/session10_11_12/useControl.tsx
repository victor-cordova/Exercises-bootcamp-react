import { useState } from "react";

const useControl = () => {

	const [control, setControl] = useState<boolean>(false);

	const updateControl = (conditional: boolean) => {
		setControl(conditional);
	}

	return {
		control,
		updateControl,
	};
}

export { useControl };
