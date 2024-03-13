import { configureStore } from '@reduxjs/toolkit';
import {filterReducer, contactsReducer} from './createSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,  
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
