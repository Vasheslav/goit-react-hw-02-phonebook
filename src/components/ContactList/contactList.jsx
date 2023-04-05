import React from "react";
import ContactItem from '../ContactItem/contactItem';
import PropTypes from "prop-types";

const ContactList = ({ filter, contacts }) => {
    const normalazedFilter = filter.toLowerCase()
    const filteredContacts = contacts.filter(
      contact => contact.name.toLowerCase().includes(normalazedFilter)
  );
    
    return <ul>
        {filteredContacts.map(contact => (
            <ContactItem key={contact.id} name={contact.name} number={contact.number}/>
        ))}
          </ul>
}

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};