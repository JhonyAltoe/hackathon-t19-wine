import { createSlice } from '@reduxjs/toolkit';
import { getProductsWine } from './globalActions/getProductsWine';

const initialState = {
  items: [],
  loading: false
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: {
    [getProductsWine.pending]: (state) => {
      state.loading = true;
    },
    [getProductsWine.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    },
    [getProductsWine.rejected]: (state) => {
      state.loading = false;
    }
  }
});

// Action creators are generated for each case reducer function
// export const {} = counterSlice.actions

export default globalSlice.reducer;
