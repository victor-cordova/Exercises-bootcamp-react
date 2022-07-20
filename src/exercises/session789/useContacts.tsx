import { useState } from "react";
import { Contact } from "./contact.constructor";
import { ONLINE_STATE } from "./online-state.model";

interface UseContactProps {
	defaultContacts: Contact[]
}

const useContacts = ({defaultContacts}: UseContactProps): {
	contacts: Contact[],
	addContact: (newContact: Contact) => void,
	deleteContact: (id: number) => void,
	updateOnlineState: (id: number, state: ONLINE_STATE) => void,
} => {
	const [contacts, setContacts] = useState<Contact[]>(defaultContacts);

	const addContact = (newContact: Contact): void => {
		setContacts([
			...contacts,
			newContact
		])
	}

	const deleteContact = (id: number): void => {
		const contactsFiltered = contacts.filter(contact => {
			return contact.id !== id;
		})
		setContacts(contactsFiltered)
	}

	const createObject = (values: (string | number | boolean)[]): Contact => {
		const Object = new Contact(values[0] as string, values[1] as string, values[2] as number, values[3] as boolean, values[4] as boolean);
		return Object;
	}

	const updateVisible = (contact: Contact): Contact => {
		const contactValues = Object.values({...contact,
			isVisible: !contact.isVisible
		});

		return createObject(contactValues);
	}

	const updateConnected = (contact: Contact): Contact => {
		const contactValues = Object.values({...contact,
			isConnected: !contact.isConnected
		});

		return createObject(contactValues);;
	}

	const updateOnlineState = (id: number, state: ONLINE_STATE): void => {
		let newContact: Contact;
		const contactsUpdated: Contact[] = contacts.map(contact => {
			if (contact.id === id) {
				if (state === ONLINE_STATE.isVisible) {
					newContact = updateVisible(contact);
				} else {
					newContact = updateConnected(contact);
				}

				return newContact;
			}
			return contact;
		})

		// console.log(contactsUpdated)
		setContacts(contactsUpdated)
	}

	return {
		contacts,
		addContact,
		deleteContact,
		updateOnlineState,
	}
}

export { useContacts };
