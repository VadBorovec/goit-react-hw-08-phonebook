import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filtered(state, { payload }) {
      return payload;
    },
  },
});

export const { filtered } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
