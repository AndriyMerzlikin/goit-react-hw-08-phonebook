import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

const localStorageKey = 'contacts';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem(localStorageKey);
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  // return initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
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
      setContacts(prevContacts => [...prevContacts, idContact]);
    }
  };

  // const updateFilter = newFilter => {
  //   setFilter(newFilter);
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm newContact={addContact} />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};
