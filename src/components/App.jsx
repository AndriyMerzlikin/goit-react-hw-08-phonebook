import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

const localStorageKey = 'contacts';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem(localStorageKey);
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = idContact => {
    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== idContact)
    );
  };

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

  const updateFilter = newFilter => {
    setFilter(newFilter);
  };

  const visibleContacts = contacts.filter(item =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm newContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onUpdateFilter={updateFilter} />
      {visibleContacts.length > 0 && (
        <Contacts
          contactList={visibleContacts}
          onDeleteContact={deleteContact}
        />
      )}
    </div>
  );
};
