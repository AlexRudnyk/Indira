import { createSlice } from '@reduxjs/toolkit';
import { addGoods, getAllGoods, getGoodById } from './operations';

const initialState = {
  goods: [],
  isRefreshing: false,
  error: false,
};

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload.message || false;
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllGoods.pending, handlePending)
      .addCase(getAllGoods.fulfilled, (state, action) => {
        state.goods = action.payload;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(getAllGoods.rejected, handleRejected)

      .addCase(addGoods.pending, handlePending)
      .addCase(addGoods.fulfilled, (state, action) => {
        state.goods = [...state.goods, action.payload];
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(addGoods.rejected, handleRejected)

      .addCase(getGoodById.pending, handlePending)
      .addCase(getGoodById.fulfilled, (state, action) => {
        state.goods.filter(good => good.id === action.payload.id);
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(getGoodById.rejected, handleRejected);
  },
});

export const goodsReducer = goodsSlice.reducer;
