import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import linksReducer from './linksSlice';

export const store = configureStore({
  reducer: {
    links: linksReducer,
    auth: authReducer,
  },
});
