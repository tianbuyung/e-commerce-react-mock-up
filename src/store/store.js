import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'store/authReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
