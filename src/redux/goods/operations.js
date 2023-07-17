import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3030';

export const getAllGoods = createAsyncThunk(
  'goods/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/goods/getgoods');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getGoodById = createAsyncThunk(
  'goods/getById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/goods/id/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addGoods = createAsyncThunk(
  'goods/addGood',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/goods/addgood', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
