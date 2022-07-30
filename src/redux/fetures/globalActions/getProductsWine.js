import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductsWine = createAsyncThunk('global/getProductsWine', async () => {
  const url = 'https://wine-back-test.herokuapp.com/products';
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    return data.items;
  } catch (error) {
    console.log(`getProductsWine ${error}`);
  }
});

// https://wine-club-proxy.herokuapp.com/modalities

// https://wine-back-test.herokuapp.com/products
// https://documenter.getpostman.com/view/10015622/UVJiiuHi#fe849253-c47a-492f-a860-08350296c570
