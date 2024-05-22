
import { configureStore } from '@reduxjs/toolkit';
import  authReducer from './features/user/UserSlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
