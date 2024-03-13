import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadContacts } from "../redux/createSlice";
import { persistor } from "../redux/store";
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Search } from './Search/Search';
import { ContactList } from './ContactList/ContactList';
import { setFilter, addContact, deleteContact  } from '../redux/createSlice';

export const App = () => {
  const filterValue = useSelector((state) => state.filter);
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter both the contact name and phone number.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    dispatch(addContact(newContact));
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue)
  );

  useEffect(() => {
    const persistedContacts = persistor.getState().contacts; // Get persisted contacts
    dispatch(loadContacts(persistedContacts)); // Dispatch the loadContacts action
  }, [dispatch]);


  return (
    <div>
      <h1>Phonebook</h1>
      <Form handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Search filter={filterValue} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};
