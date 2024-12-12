// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import contactsReducer from '../redux/contacts/slice';
import filtersReducer from '../redux/filters/slice';
import { persistReducer } from 'redux-persist';
import { authReducer } from './auth/slice';
import { persistStore } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
