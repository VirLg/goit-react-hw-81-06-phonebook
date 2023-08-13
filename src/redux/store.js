import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

import { addContacts } from './slice';
import { contactSlice } from './slice';
// export const store = configureStore({
//   reducer: {
//     addContacts: contactSlice.reducer,
//   },
// });
export const add = createAction('contacts/add');
export const remove = createAction('contacts/remove');
const myReducer = createReducer([], {
  [add]: (state, action) => [...state, action.payload],
  [remove]: state => [...state],
});

export const store = configureStore({
  reducer: {
    cont: myReducer,
  },
});
