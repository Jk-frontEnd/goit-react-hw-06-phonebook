import React from 'react';
import css from './ContactList.module.css';
import { getContacts, getFilter } from '../../redux/select';
import { ContactElem } from '../ContactElem/ContactElem'; 
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filteredContactsList(contacts, filter);

  return (
    <div className={css.contBox}>
      <h2 className={css.header}>Contacts</h2>
      <ul>
        {filteredContacts.map(({id, name, number}) => (
          <ContactElem key={id} contact={{id, name, number}} />
        ))}
      </ul>
    </div>
  );
};

const filteredContactsList = ({ contacts, filter }) => {
  const normalizedFilter = typeof filter === 'string' ? filter.toLowerCase() : '';
  if (contacts && Array.isArray(contacts)) {
    return contacts.filter(contact =>
      contact.name && typeof contact.name === 'string' && contact.name.toLowerCase().includes(normalizedFilter)
    );
  } else {
    return []; 
  }
};

export { ContactList };
