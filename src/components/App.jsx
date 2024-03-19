import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from './Form/Form';
import { Search } from './Search/Search';
import { ContactList } from './ContactList/ContactList';
import { addContact, deleteContact } from '../redux/contactSlice';
import { setFilter, selectFilter } from '../redux/filterSlice';

export const App = () => {
  const filterValue = useSelector(selectFilter);
  // Define a selector for selecting contacts
  const selectContacts = (state) => state.contacts.items;
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    dispatch(addContact({ id: `id-${Date.now()}`, name, number }));
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  // Filter contacts based on filter value
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue)
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Search filter={filterValue} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};
