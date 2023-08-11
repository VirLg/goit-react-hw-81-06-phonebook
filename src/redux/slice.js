import { createSlice } from '@reduxjs/toolkit';
export const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact: (state, payload) => [...state, payload],
  },
});
export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
