import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    orders: [],
    error: '',
};
export const getOrdersData = createAsyncThunk(
    'orders/getOrdersData',
    async () => {
        try {
            const response = await axios.get(
                'http://localhost:4000/api/v1/orders'
            );
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    extraReducers: {
        [getOrdersData.pending]: (state) => {
            state.loading = true;
        },
        [getOrdersData.fulfilled]: (state, actions) => {
            const { orders } = actions.payload;
            state.orders = orders;
            state.loading = false;
        },
        [getOrdersData.rejected]: (state, actions) => {
            state.loading = false;
            state.error = actions.payload;
        },
    },
});

export default ordersSlice.reducer;
