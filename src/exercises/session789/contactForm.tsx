import { FormEvent, useRef } from "react";
import { Contact } from "./contact.constructor";

interface DataI {
	key: string,
	value: string,
}

interface Props {
	contacts: Contact[],
	addContact: (newContact: Contact) => void,
}

const ContactForm = ({contacts, addContact}: Props) => {

	const formRef = useRef<HTMLFormElement>(null);
	const getData = () => {
		const data: DataI[] = [];
		const formData = new FormData(formRef.current as HTMLFormElement | undefined);

		formData.forEach((item, key) => {
			data?.push({key: key, value: item as string});

		})

		return data;
	}

	const isDataCompleted = (data: DataI[]): boolean => {
		let isCompleted: boolean = true;
		data.forEach(item => {
			if (!item.value) {
				isCompleted = false;
			}
		})
		return isCompleted;
	}

	const createContact = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newContact: DataI[] = getData();
		if (isDataCompleted(newContact)) {
			const lengthTaskPlusOne: number = contacts.length + 1;
			const task = new Contact(newContact[0].value, newContact[1].value, lengthTaskPlusOne, true, true);

			addContact(task);
		}
	}

	return (
		<form ref={formRef} id="taskForm" onSubmit={createContact}>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" name="name"/>

			<label htmlFor="lastname">Lastname</label>
			<input type="text" id="lastname" name="lastname"/>

			<button type="submit">Button</button>
		</form>
	);
}

export { ContactForm };
