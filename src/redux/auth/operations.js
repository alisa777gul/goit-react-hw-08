import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

const setAuthHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  goitApi.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      toast.success('Successfully registered!');
      return response.data;
    } catch (e) {
      toast.error('Try again...');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      toast.success('Successfully logged in!');
      return response.data;
    } catch (e) {
      toast.error('Try again...');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await goitApi.post('/users/logout');
    clearAuthHeader();
    toast.success('Goodbye!');
    return response.data;
  } catch (e) {
    toast.error('Try again...');
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await goitApi.get('/users/current');
      return response.data;
    } catch (e) {
      toast.error('Try again...');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
