import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductsWine = createAsyncThunk('global/getProductsWine', async (type) => {
  let url = '';
  if (type === 'foods') {
    url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  }
  if (type === 'drinks') {
    url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  }
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    let recepies = [];
    if (type === 'foods') {
      recepies = data.meals;
    }
    if (type === 'drinks') {
      recepies = data.drinks;
    }
    return recepies;
  } catch (error) {
    console.log('fetchGenericRecepies error');
    // return rejectWithValue(error)
  }
});

// https://wine-club-proxy.herokuapp.com/modalities

// https://wine-back-test.herokuapp.com/products
// https://documenter.getpostman.com/view/10015622/UVJiiuHi#fe849253-c47a-492f-a860-08350296c570
