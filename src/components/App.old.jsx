import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

const localStorageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = window.localStorage.getItem(localStorageKey);

    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        localStorageKey,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;
    const existedContact = contacts.some(
      contact => contact.name === newContact.name
    );
    if (existedContact) {
      alert(`${newContact.name} is already in contact list`);
    } else {
      const idContact = {
        ...newContact,
        id: nanoid(),
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, idContact],
      }));
      console.log(idContact);
    }
  };
  updateFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== idContact),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(item =>
      item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm newContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onUpdateFilter={this.updateFilter} />
        {visibleContacts.length > 0 && (
          <Contacts
            contactList={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
