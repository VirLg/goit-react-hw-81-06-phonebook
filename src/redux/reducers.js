import { combineReducers } from 'redux';
import { contactSlice } from './slice';
import { sortSlice } from './sliceFilter';
export const reducer = combineReducers({
  contactsBook: contactSlice.reducer,
  contactFilter: sortSlice.reducer,
});
