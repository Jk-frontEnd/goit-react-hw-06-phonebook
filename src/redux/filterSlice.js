import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;

export const selectFilter = (state) => state.filter;
export const filterReducer = filterSlice.reducer;
