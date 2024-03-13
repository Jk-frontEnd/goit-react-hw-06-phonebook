import { createSlice } from '@reduxjs/toolkit';

const initialStateContacts = [];
const initialStateFilter = '';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
    loadContacts: (state, action) => {
      return action.payload; // Assuming action.payload is an array of contacts
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { addContact, deleteContact, loadContacts } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;

export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;
