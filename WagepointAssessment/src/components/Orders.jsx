import React, { useState, useId, useEffect } from 'react';
import { v4 as uId } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import {
    userTotalPaymentsData,
    modifiedPrices,
    userOrderedData,
    useOweData,
} from '../helpers/ordersManipulation';
import '../css/Orders.css';
import Loader from './Loader';
import { getPaymentsData } from '../../reduxToolKit/slices/paymentsSlice';
import { postExportData } from '../../reduxToolKit/slices/exportSlice';
import { getOrdersData } from '../../reduxToolKit/slices/ordersSlice';
import { getPricesData } from '../../reduxToolKit/slices/priceSlice';
import { allOrdersList } from '../../reduxToolKit/slices/orderListSlice';

const Orders = () => {
    const {
        paymentsData: { payments },
        ordersData: { orders },
        pricesData: { prices },
        ordersListData: { allOrders },
    } = useSelector((store) => store);

    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true);

    const reportHandler = async () => {
        try {
            const response = await dispatch(postExportData(allOrders));
            alert('Export Successfully Done in "coffee_Reports.json" file');
        } catch (error) {
            alert('Export Failed', error.message);
        }
    };

    const apiHandler = async () => {
        await dispatch(getPaymentsData());
        await dispatch(getPricesData());
        await dispatch(getOrdersData());
    };
    const finalReport = () => {
        const userTotalPayments = userTotalPaymentsData(payments);
        const simplifiedPrices = modifiedPrices(prices);
        const userOrderedList = userOrderedData(
            orders,
            simplifiedPrices,
            userTotalPayments
        );
        const userOweAmount = useOweData(userOrderedList);
        let data = [];
        for (let user in userOrderedList) {
            data.push({
                id: uId(),
                user,
                orders: userOrderedList[user].orders,
                orderedAmount: userOrderedList[user].orderedAmount,
                paidAmount: userOrderedList[user].paidAmount,
                balanceAmount: userOweAmount[user],
            });
        }
        return data;
    };
    useEffect(() => {
        apiHandler();
    }, []);

    useEffect(() => {
        if (payments.length > 0 && prices.length > 0 && orders.length > 0) {
            const reports = finalReport();
            dispatch(allOrdersList(reports));
            setLoader(false);
        }
    }, [payments, prices, orders, dispatch]);

    return loader ? (
        <Loader />
    ) : (
        <section className='ordered-container'>
            <div className='ordered-headings'>
                <div>User</div>
                <div>Ordered Amount</div>
                <div>Paid Amount</div>
                <div>Balance Amount</div>
            </div>
            <div className='orderedData'>
                {allOrders?.map(
                    ({
                        id,
                        user,
                        orderedAmount,
                        paidAmount,
                        balanceAmount,
                    }) => {
                        return (
                            <div className='orderedList' key={id}>
                                <div>{user}</div>
                                <div>{orderedAmount}</div>
                                <div>{paidAmount}</div>
                                <div>{balanceAmount}</div>
                            </div>
                        );
                    }
                )}
            </div>
            <button className='export-report' onClick={reportHandler}>
                Export Coffee Report
            </button>
        </section>
    );
};

/* const mapStateToProps = (state) => {
    console.log(' return arjun state from reducers');
    console.log(state);
    return {
        ctr: state.ctr.counter,
        showedResult: state.res.result,
    };
};

const dispatchToProps = (dispatch) => {
    console.log('dispatching');
    return {
        onChangeIncrement: () => dispatch(actionCreators.increment()),
        onChangeDecrement: () => dispatch(actionCreators.decrement()),
        onChangeAdd: () => dispatch(actionCreators.add(5)),
        onChangeSub: () => dispatch(actionCreators.sub(5)),
        onShowResult: (counterResult) =>
            dispatch(actionCreators.showResult(counterResult)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    };
};

export default connect(mapStateToProps, dispatchToProps)(Orders); */
export default Orders;
