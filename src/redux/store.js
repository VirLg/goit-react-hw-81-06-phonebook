import { configureStore } from '@reduxjs/toolkit';

import { contactSlice } from './slice';
import { sortSlice } from './sliceFilter';

// export const store = configureStore({
//   reducer: {
//     addContacts: contactSlice.reducer,
//   },
// });
// export const add = createAction('contacts/add');
// export const remove = createAction('contacts/remove');
// const myReducer = createReducer([], {
//   [add]: (state, action) => [...state, action.payload],
//   [remove]: state => [...state],
// });

export const store = configureStore({
  reducer: {
    contactsBook: contactSlice.reducer,
    contactFilter: sortSlice.reducer,
  },
});
