import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './authSlice/slice';
import userReducer from './userSlice/slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
