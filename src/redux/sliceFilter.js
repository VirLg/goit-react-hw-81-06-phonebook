import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
  name: 'contactFilter',
  initialState: [],
  reducers: {
    filter: (state, action) => [action.payload],
  },
});

export const { filter } = sortSlice.actions;
export default sortSlice.reducer;
