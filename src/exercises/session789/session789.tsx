// import * as React from 'react';

import { useRef, useState } from "react";

import { Contact } from "./contact.constructor";
import { ONLINE_STATE } from "./online-state.model";
import {  } from "./useContacts";

interface ContactComponentProps {
	contact: Contact,
	addContact: (newContact: Contact) => void,
	deleteContact: (id: number) => void,
	updateOnlineState: (id: number, state: ONLINE_STATE) => void
}

// interface Contact {

// }

// const defaultVisible: boolean = false;

interface ContactUIProps {
	updateOnlineState: (id: number, state: ONLINE_STATE) => void,
	contact: Contact,
}

const ContactUI = ({updateOnlineState, contact}: ContactUIProps) => {
	return (
		<div>
			<h2>
				{`${contact.name} ${contact.lastname}`}
			</h2>
			<p>{`Is ${contact.isConnected ? "connected" : "not connected"}`}</p>
			<button onClick={() => updateOnlineState(contact.id, ONLINE_STATE.isConnected)}>
				{contact.isConnected? "Disconnect": "Connect"}
			</button>
		</div>
	)
}

const ContactComponent = ({
	contact,
	addContact,
	deleteContact,
	updateOnlineState,
}: ContactComponentProps) => {

	const buttonRef = useRef<HTMLButtonElement>(null);
	// console.log(ONLINE_STATE.connected)


	return (
		<li>
			<button onClick={() => updateOnlineState(contact.id, ONLINE_STATE.isVisible)}>
				{contact.isVisible? "Hide contact": "Show contact"}
			</button>
			{contact.isVisible && <ContactUI updateOnlineState={updateOnlineState} contact={contact}/>}
		</li>
	)
}

interface ContactListProps {
	contacts: Contact[],
	addContact: (newContact: Contact) => void,
	deleteContact: (id: number) => void,
	updateOnlineState: (id: number, state: ONLINE_STATE) => void
}

const ContactList = ({
	addContact,
	contacts,
	deleteContact,
	updateOnlineState
}: ContactListProps) => {

	return (
		<section>
			<ul>
				{contacts.map((contact, index) => {
					return <ContactComponent
					key={index}
					contact={contact}
					addContact={addContact}
					deleteContact={deleteContact}
					updateOnlineState={updateOnlineState}
					/>
				})}
			</ul>
			<form action="">
				<input type="text" placeholder="Insert name"/>
				<input type="text" placeholder="Insert lastname"/>
				<button>Create contact</button>
			</form>

			{/* <button>Create contact</button> */}
		</section>
	);
}

export { ContactList }
