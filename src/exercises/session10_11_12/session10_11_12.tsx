import { useEffect } from "react";
import { Colors } from "./useColor";

export interface Props {
	colors: Colors,
	updateColors: () => void,
	control: boolean,
	updateControl: (conditional: boolean) => void,
}

const squareStyle = (colors: Colors) => {
	return {
		backgroundColor: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`,
		width: "255px",
		height: "255px",
	}
}

const Session10_11_12 = ({colors, updateColors, control, updateControl}: Props) => {
	useEffect(() => {
		let updaterColors: NodeJS.Timer | null = null;

		if (control) {
			updaterColors = setInterval(() => {
				updateColors();
			}, 200)
		}
		return () => {
			if (updaterColors) {
				clearInterval(updaterColors);
			}
		}
	}, [control])

	return (
		<div
			style={squareStyle(colors)}
			onMouseEnter={() => updateControl(true)}
			onDoubleClick={() => updateControl(!control)}
			onMouseLeave={() => updateControl(false)}
		>
		</div>
	);
}

export { Session10_11_12 };
