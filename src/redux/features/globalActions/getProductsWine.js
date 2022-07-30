import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductsWine = createAsyncThunk('global/getProductsWine', async () => {
  let url = 'https://wine-back-test.herokuapp.com/products';
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    return data.items;
  } catch (error) {
    console.log(`getProductsWine ${error.message}`);
    // return rejectWithValue(error)
  }
});
