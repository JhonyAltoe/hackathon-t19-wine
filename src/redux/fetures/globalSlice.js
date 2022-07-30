import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {}
});

// Action creators are generated for each case reducer function
// export const { } = globalSlice.actions;

export default globalSlice.reducer;
