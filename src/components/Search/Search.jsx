import React from 'react';
import css from './Search.module.css';
import { useDispatch, useSelector } from 'react-redux'; 
import { setContactsFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/select'; 

const Search = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  const filterValue = useSelector(getFilter); 

  return (
    <div className={css.searchBox}>
      <label>
        Find contact by name:
        <input type="text" value={filterValue} onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export { Search };
