import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

const initialState = {
    contacts: [],
    filter: ""
};

export const store = configureStore({
  reducer: rootReducer,
});