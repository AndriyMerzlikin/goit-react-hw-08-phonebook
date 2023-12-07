import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { nanoid } from 'nanoid';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    addContact(state, action) {
      state.push(action.payload);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = contactSlice.reducer;

export const persistedContactsReduser = persistReducer(
  persistConfig,
  contactsReducer
);

export const { deleteContact, addContact } = contactSlice.actions;

// selectors

export const getContactsValue = state => state.contacts;
