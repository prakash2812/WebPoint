import { configureStore } from '@reduxjs/toolkit';
import paymentReducer from '../slices/paymentsSlice';
import exportReducer from '../slices/exportSlice';
import ordersListReducer from '../slices/orderListSlice';
import ordersReducer from '../slices/ordersSlice';
import pricesReducer from '../slices/priceSlice';

const store = configureStore({
    reducer: {
        paymentsData: paymentReducer,
        ordersData: ordersReducer,
        pricesData: pricesReducer,
        ordersListData: ordersListReducer,
        exportedData: exportReducer,
    },
});
export default store;
