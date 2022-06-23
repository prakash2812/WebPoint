import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    prices: [],
    error: '',
};
export const getPricesData = createAsyncThunk(
    'prices/getPricesData',
    async () => {
        try {
            const response = await axios.get(
                'http://localhost:4000/api/v1/prices'
            );
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

const pricesSlice = createSlice({
    name: 'prices',
    initialState,
    extraReducers: {
        [getPricesData.pending]: (state, actions) => {
            state.loading = true;
        },
        [getPricesData.fulfilled]: (state, actions) => {
            const { prices } = actions.payload;
            state.prices = prices;
            state.loading = false;
        },
        [getPricesData.rejected]: (state, actions) => {
            state.loading = false;
            state.error = actions.payload;
        },
    },
});

export default pricesSlice.reducer;
