// import * as React from 'react';

import { useEffect, useState } from "react";

interface Props {
}

class Person {
	constructor(
		public name: string,
		public gender: string,
		public age: number,
	) {}
}

//The state can be a primitive
const initialValue = 0;

//Also a object
const defaultPerson = new Person("victor", "male", 21)

const Example1 = (props: Props) => {



	const [value, setValue] = useState<number>(initialValue);
	const [person, setPerson] = useState<Person>(defaultPerson);

	const increaseValue = (): void => {
		setValue(value+1);
	}

	useEffect(() => {
		console.log("nuevo render");
	})

	console.log("otro render");



	const updatePerson = (): void => {
		// person
		setPerson({...person, age: person.age+1})
	}

	return (
		<div>
			<h2>The value is {value}</h2>
			<button onClick={increaseValue}>Increase the value</button>

			<h2>The person is {person.age}</h2>
			<button onClick={updatePerson}>Increase his age</button>
		</div>
	);
};

export {Example1};
