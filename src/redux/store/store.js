import { configureStore } from '@reduxjs/toolkit';
import globalSlice from '../fetures/globalSlice';

export const store = configureStore({
  reducer: {
    global: globalSlice
  }
});
