import { createAsyncThunk } from '@reduxjs/toolkit';

export const getModalities = createAsyncThunk('global/getModalities', async () => {
  let url = 'https://wine-club-proxy.herokuapp.com/modalities';
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    return data;
  } catch (error) {
    console.log(`getModalities ${error.message}`);
    // return rejectWithValue(error)
  }
});
