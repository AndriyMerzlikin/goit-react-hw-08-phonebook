import { useState, useEffect } from 'react';
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
  // useEffect(() => {
  //   window.localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  // }, [contacts]);

  // const updateFilter = newFilter => {
  //   setFilter(newFilter);
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};
