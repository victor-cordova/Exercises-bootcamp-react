import { useEffect, useState } from "react";

interface IUser {
	date: Date,
	age: number,
	name: string,
	lastname: string,
}

interface Props {
}

const defaultUser: IUser = {
	date: new Date(),
	age: 0,
	name: "Martín",
	lastname: "San José",
}

const Clock = ({}: Props) => {
	const [user, setUser] = useState<IUser>(defaultUser);

	const tick = (newAge: number) => {
		setUser({
			...user,
			age: newAge,
			date: new Date(),
		})
	}

	useEffect(() => {
		let newAge: number = user.age;

		const timerID = setInterval(() => {
			newAge+=1;
			tick(newAge);
		}, 1000);
		return () => {
			clearInterval(timerID);
		}

	}, [])

	return (
		<div>
			<h2>
				Actual date: {user.date.toLocaleTimeString()}
			</h2>
			<h3>
				{user.name} {user.lastname}
			</h3>
			<h1>
				Age: {user.age}
			</h1>
		</div>
	)
}

export {Clock};
