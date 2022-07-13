// import {numero} from "./App.js"
// import {  } from '';

import { useEffect, useRef, useState } from "react";

interface Props {
    name: string,
    newAge: number,
}

const Greetings = ({name, newAge}: Props) => {

	const [age, setAge] = useState<number>(newAge)

	const button = useRef<HTMLButtonElement>(null);

	// console.log("asdasd")

	const increaseAge = (amount: number) => {
		// setAge(age + amount);
		if (button.current) {
			button.current.innerText = "Holi"
		}

		// console.log(button.current.)
	}


	return (
		<div>
			<p>Hello my name is {name}</p>
			<p>I am {age}</p>
			<button ref={button} onClick={() => increaseAge(5)}>Update age</button>
		</div>

	)
}

export { Greetings };
