import { configureStore } from '@reduxjs/toolkit';
import addContact from './slice';
export const store = configureStore({
  reducer: {
    contact: addContact,
  },
});
