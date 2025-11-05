import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/store/slices/authSlice';
import sessionReducer from '@/store/slices/sessionSlice';
import uiReducer from '@/store/slices/uiSlice';
import themeReducer from '@/store/slices/themeSlice';
import notificationsReducer from '@/store/slices/notificationsSlice';
import { api } from '@/store/services/api';

const rootReducer = combineReducers({
  auth: authReducer,
  session: sessionReducer,
  ui: uiReducer,
  theme: themeReducer,
  notifications: notificationsReducer,
  [api.reducerPath]: api.reducer
});

export default rootReducer;
