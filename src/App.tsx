import React from "react";

import { ComponentA } from "./exercises/session123";
import { Clock } from "./exercises/session456";
import { Contact } from "./exercises/session789/contact.constructor";
import { ContactList } from "./exercises/session789/session789";
import { useContacts } from "./exercises/session789/useContacts";

import { useColor } from "./exercises/session10_11_12/useColor";
import { useControl } from "./exercises/session10_11_12/useControl";
import { Session10_11_12 } from "./exercises/session10_11_12/session10_11_12";


// const defaultContacts = [
// 	new Contact("Victor", "Cordova", 0, true, false),
// 	new Contact("Alex", "Gusman", 1, false, true),
// 	new Contact("Javier", "Baltazar", 2, true, false),
// ]

export const App = () => {

	// const {
	// 	addContact,
	// 	contacts,
	// 	deleteContact,
	// 	updateOnlineState
	// } = useContacts({defaultContacts});

	const {
		colors,
		updateColors,
	} = useColor();

	const {
		control,
		updateControl
	} = useControl();

	return (
		<React.Fragment>
			{/* <ComponentA/> */}
			{/* <Clock/> */}
			{/* <ContactList
				contacts={contacts}
				addContact={addContact}
				deleteContact={deleteContact}
				updateOnlineState={updateOnlineState}
			/> */}
			<Session10_11_12
				colors={colors}
				updateColors={updateColors}
				control={control}
				updateControl={updateControl}
			/>
		</React.Fragment>
	)
};
