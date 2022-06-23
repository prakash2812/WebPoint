import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    payments: [],
    error: '',
};
export const getPaymentsData = createAsyncThunk(
    'payments/getPaymentsData',
    async () => {
        try {
            const response = await axios.get(
                'http://localhost:4000/api/v1/payments'
            );
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

const paymentsSlice = createSlice({
    name: 'payments',
    initialState,
    extraReducers: {
        [getPaymentsData.pending]: (state) => {
            state.loading = true;
        },
        [getPaymentsData.fulfilled]: (state, actions) => {
            const { payments } = actions.payload;
            state.payments = actions.payload.payments;
            state.loading = false;
        },
        [getPaymentsData.rejected]: (state, actions) => {
            state.loading = false;
            state.error = actions.payload;
        },
    },
});

export default paymentsSlice.reducer;
