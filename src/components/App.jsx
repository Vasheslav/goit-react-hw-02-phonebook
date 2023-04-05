import React from 'react';
import { nanoid } from "nanoid";

export class App extends React.Component{
  state = {
    contacts: [],
    name: '',
    number: '',
    filter:''
  }

  nameId = nanoid();

  handleChange = event => {
    this.setState({[ event.currentTarget.name ]: event.currentTarget.value })
  };

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

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    this.addContacts(this.state.name, this.state.number);
    console.log(this.state.contacts);

    this.reset();
  };

   renderContacts=() =>{
    return this.state.contacts.map(contact => (
      <li key={contact.id}>{contact.name}: {contact.number}</li>
    ));
  }

  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  }

  handleChangeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  
  
  render() {
    const normalazedFilter = this.state.filter.toLowerCase()
    const filteredContacts = this.state.contacts.filter(
      contact => contact.name.toLowerCase().includes(normalazedFilter)
    );

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type='submit'>Add contact</button>
        </form>
        
        <div>
          <h1>Contacts</h1>
          <label>
            Find contacts by name
            <input type="text" value={this.state.filter} onChange={this.handleChangeFilter} />
          </label>
          <ul>
            {this.renderContacts()}
          </ul>
        </div>
      </div>
    )
  }
}



