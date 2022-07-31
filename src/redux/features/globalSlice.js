import { createSlice } from '@reduxjs/toolkit';
import { getProductsWine } from './globalActions/getProductsWine';
import { getModalities } from './globalActions/getModalities';

const initialState = {
  items: [],
  loading: false,
  modalities: []
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
    },
    [getModalities.pending]: (state) => {
      state.loading = true;
    },
    [getModalities.fulfilled]: (state, { payload }) => {
      state.modalities = payload;
      state.loading = false;
    },
    [getModalities.rejected]: (state) => {
      state.loading = false;
    }
  }
});

// Action creators are generated for each case reducer function
// export const {} = counterSlice.actions

export default globalSlice.reducer;
