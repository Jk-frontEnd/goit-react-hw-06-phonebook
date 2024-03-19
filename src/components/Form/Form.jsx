import React, { useState } from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice'; 

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(
        `Contact with name ${name} already exists!`
      );
      return;
    }
    
    const isNumberExist = contacts.find(
      contact => contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
    );

    if (isNumberExist) {
      alert(
        `Number ${number} is already in contacts!`
      );
      return;
    }
    
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.formBox} onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleNameChange} required />
      </label>
      <label>
        Phone number
        <input type="tel" name="number" value={number} onChange={handleNumberChange} required />
      </label>
      <button className={css.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export { Form };
