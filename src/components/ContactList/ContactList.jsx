import React from 'react';
import css from './ContactList.module.css';
import { getContacts, getFilter } from '../../redux/select';
import { ContactElem } from '../ContactElem/ContactElem'; 
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // Provide a default value for filter if it is undefined
  const normalizedFilter = filter ? filter.toLowerCase() : '';

  const filteredContactsList = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filteredContacts = filteredContactsList(contacts, normalizedFilter);

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

export { ContactList };
