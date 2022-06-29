import { useState } from "react";

class Contact {
    constructor(
        public name: string,
        public lastname: string,
        public email: string,
        public isConnected: boolean = false,
    ){}
}

interface Props {
    newContact: Contact,
}

const ComponentB = ({newContact}: Props) => {
    
    const [contact, setContact] = useState<Contact>(newContact);

    const switchConnection = (): void => {
        setContact({...contact, isConnected: !contact.isConnected})
    }

    return (
        <div>
            <h2>{contact.name} {contact.lastname}</h2>
            <h3>It's {contact.isConnected? "online" : "offline"}</h3>
            <button onClick={switchConnection}>Switch connection</button>
        </div>
    );
}

const ComponentA = () => {
    
    const deafultContact = new Contact("Victor", "Ramirez", "pepito@gmail.com", false)
    
    return (
        <ComponentB newContact={deafultContact}/>
    );
}

export { ComponentA };