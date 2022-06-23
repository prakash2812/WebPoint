import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allOrders: [],
};

const orderListSLice = createSlice({
    name: 'allOrderListData',
    initialState,
    reducers: {
        allOrdersList(state, actions) {
            state.allOrders = actions.payload;
        },
    },
});
export const { allOrdersList } = orderListSLice.actions;
export default orderListSLice.reducer;
