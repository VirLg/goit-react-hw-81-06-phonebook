import { configureStore } from '@reduxjs/toolkit';

// import { contactSlice } from './slice';
// import { sortSlice } from './sliceFilter';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from './reducers';

const persistConfig = {
  key: 'contact',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
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
