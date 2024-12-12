// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import contactsReducer from '../redux/contacts/slice';
import filtersReducer from '../redux/filters/slice';
import { persistReducer } from 'redux-persist';
import { authReducer } from './auth/slice';
import { persistStore } from 'redux-persist';

// Persist configuration for auth reducer
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // Only persist the token, not the whole state
};

// Configure the store
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer), // Persist the auth reducer
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

// Create and export the persistor for redux-persist
export const persistor = persistStore(store);
