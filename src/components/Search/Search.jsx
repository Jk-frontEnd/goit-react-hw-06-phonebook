import React from 'react';
import css from './Search.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/select';
import { setContactsFilter } from '../../redux/filterSlice';

const Search = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setContactsFilter(event.target.value));
  };


  return (
    <div className={css.searchBox}>
      <label>
        Find contact by name:
        <input type="text" value={useSelector(getFilter)} onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export { Search };