import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    status: '',
};
export const postExportData = createAsyncThunk(
    'reports/postExportData',
    async (body) => {
        try {
            const response = await axios.post(
                'http://localhost:4000/api/v1/reports',
                body
            );
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

const exportSlice = createSlice({
    name: 'reports',
    initialState,
    extraReducers: {
        [postExportData.pending]: (state) => {
            state.loading = true;
        },
        [postExportData.fulfilled]: (state, actions) => {
            state.loading = false;
        },
        [postExportData.rejected]: (state, actions) => {
            state.loading = false;
        },
    },
});

export default exportSlice.reducer;
