import React from "react";

const ContactList = ({ filter, contacts }) => {
    const normalazedFilter = filter.toLowerCase()
    const filteredContacts = contacts.filter(
      contact => contact.name.toLowerCase().includes(normalazedFilter)
    );
    
    return <ul>
        {filteredContacts.map(contact => (
            <li key={contact.id}>{contact.name}: {contact.number}</li>
        ))}
          </ul>
}

export default ContactList;