import { useState } from "react";

interface Colors {
	red: number,
	green: number,
	blue: number,
}

const minDigit = 0;
const maxDigit = 255;

const getRandomDigit = () => {
	const newDigit = Math.random() * (maxDigit - minDigit) + minDigit;
	return Math.floor(newDigit);
}

const defaultColors: Colors = {
	red: getRandomDigit(),
	green: getRandomDigit(),
	blue: getRandomDigit(),
}

const useColor = () => {

	const [colors, setColors] = useState<Colors>(defaultColors);

	const updateColors = () => {
		const newColors: Colors = {
			red: getRandomDigit(),
			green: getRandomDigit(),
			blue: getRandomDigit(),
		}

		setColors(newColors);
	}

	return {
		colors,
		updateColors,
	};
}

export { useColor, Colors };
