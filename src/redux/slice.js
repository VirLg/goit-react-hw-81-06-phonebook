const { createSlice } = require('@reduxjs/toolkit');

export const contactSlice = createSlice({
  name: 'contactsBook',
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) => [...action.payload],
    filterSlice: (state, action) => [action.payload],
  },
});
export const { add, remove } = contactSlice.actions;
export default contactSlice.reducer;
