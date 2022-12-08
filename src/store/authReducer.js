import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state) => {
      state.isAuthenticated = true;
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
