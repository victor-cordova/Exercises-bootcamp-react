import React from "react";
import { ComponentA } from "../exercises/session123";
import { Clock } from "../exercises/session456";
import { Contact } from "../exercises/session789/contact.constructor";
import { ContactList } from "../exercises/session789/session789";
import { useContacts } from "../exercises/session789/useContacts";

const defaultContacts = [
	new Contact("Victor", "Cordova", 1, true, false),
	new Contact("Alex", "Gusman", 2, false, true),
	new Contact("Javier", "Baltazar", 3, true, false),
]

export const App = () => {

	const {
		addContact,
		contacts,
		deleteContact,
		updateOnlineState
	} = useContacts({defaultContacts});

	return (
		<React.Fragment>
			{/* <ComponentA/> */}
			{/* <Clock/> */}
			<ContactList
			contacts={contacts}
			addContact={addContact}
			deleteContact={deleteContact}
			updateOnlineState={updateOnlineState}
		/>
		</React.Fragment>
	)
};
