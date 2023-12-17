import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    updateFilter(_state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;
