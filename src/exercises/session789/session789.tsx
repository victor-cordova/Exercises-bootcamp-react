import { Contact } from "./contact.constructor";
import { ContactForm } from "./contactForm";
import { ONLINE_STATE } from "./online-state.model";

interface ContactComponentProps {
	contact: Contact,
	addContact: (newContact: Contact) => void,
	deleteContact: (id: number) => void,
	updateOnlineState: (id: number, state: ONLINE_STATE) => void
}


interface ContactUIProps {
	updateOnlineState: (id: number, state: ONLINE_STATE) => void,
	deleteContact: (id: number) => void,
	contact: Contact,
}

const ContactUI = ({updateOnlineState, deleteContact, contact}: ContactUIProps) => {
	return (
		<div>
			<h2>
				{`${contact.name} ${contact.lastname}`}
			</h2>
			<p>{`Is ${contact.isConnected ? "connected" : "not connected"}`}</p>
			<button onClick={() => updateOnlineState(contact.id, ONLINE_STATE.isConnected)}>
				{contact.isConnected? "Disconnect": "Connect"}
			</button>
			<button onClick={() => deleteContact(contact.id)}>
				Delete
			</button>
		</div>
	)
}

const ContactComponent = ({
	contact,
	deleteContact,
	updateOnlineState,
}: ContactComponentProps) => {

	return (
		<li>
			<button onClick={() => updateOnlineState(contact.id, ONLINE_STATE.isVisible)}>
				{contact.isVisible? "Hide contact": "Show contact"}
			</button>
			{contact.isVisible && <ContactUI
				updateOnlineState={updateOnlineState}
				contact={contact}
				deleteContact={deleteContact}
			/>}
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
			<h2>Create contact</h2>
			<ContactForm contacts={contacts} addContact={addContact}/>
		</section>
	);
}

export { ContactList }
