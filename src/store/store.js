import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'store/authReducer';
import productReducer from 'store/productReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
