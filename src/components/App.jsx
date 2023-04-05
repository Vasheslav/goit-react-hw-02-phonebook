import React from 'react';
import { nanoid } from "nanoid";
import Form from './Form/form'
import Filter from './Filter/filter';
import ContactList from './ContactList/contactList';

export class App extends React.Component{
  state = {
    contacts: [],
    filter:''
  }

  formSubmitHandler = data => {
    const { name, number } = data
    this.addContacts(name, number)
  }

  addContacts = ( name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }))
  }

  handleChangeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChangeFilter}/>
        <ContactList filter={filter} contacts={contacts} />
      </div>
    )
  }
}



