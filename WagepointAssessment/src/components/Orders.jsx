import React, { useState, useId, useEffect } from 'react';
import Loading from './Loading';
import {
    userTotalPaymentsData,
    modifiedPrices,
    userOrderedData,
    useOweData,
} from '../helpers/ordersManipulation';
import '../css/Orders.css';
const Orders = () => {
    const [ordered, setOrdered] = useState([]);
    const [loader, setLoader] = useState(true);
    const globalId = useId();
    useEffect(() => {
        const userTotalPayments = userTotalPaymentsData();
        const simplifiedPrices = modifiedPrices();
        const userOrderedList = userOrderedData(
            simplifiedPrices,
            userTotalPayments
        );
        const userOweAmount = useOweData(userOrderedList);
        let data = [];
        for (let user in userOrderedList) {
            data.push({
                user,
                orders: userOrderedList[user].orders,
                orderedAmount: userOrderedList[user].orderedAmount,
                paidAmount: userOrderedList[user].paidAmount,
                balanceAmount: userOweAmount[user],
            });
            /* data.push({
                user,
                orders: userOrderedList[user],
                orderedAmount: userTotalOrdered[user],
                paidAmount: userTotalPayments[user],
                oweAmount: userOweAmount[user],
            }) */
        }
        setOrdered(data);
        setLoader(false);
    }, []);

    return loader ? (
        <Loading />
    ) : (
        <section className='ordered-container'>
            <div className='ordered-headings'>
                <div>User</div>
                <div>Ordered Amount</div>
                <div>Paid Amount</div>
                <div>Balance Amount</div>
            </div>
            <div className='orderedData'>
                {ordered?.map(
                    (
                        { user, orderedAmount, paidAmount, balanceAmount },
                        index
                    ) => {
                        return (
                            <div className='orderedList' key={globalId}>
                                <div>{user}</div>
                                <div>{orderedAmount}</div>
                                <div>{paidAmount}</div>
                                <div>{balanceAmount}</div>
                            </div>
                        );
                    }
                )}
            </div>
        </section>
    );
};

export default Orders;
