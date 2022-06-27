import axios from 'axios';
/* Simplified payments as hash table i.e, {'user': value} from payments source data*/
export const userTotalPaymentsData = (payments) => {
    return payments.reduce((acc, curr) => {
        if (acc[curr.user]) {
            acc[curr.user] += curr.amount;
        } else {
            acc[curr.user] = curr.amount;
        }
        return acc;
    }, {});
};

/* Simplified prices as hash table format i.e., {'drinkname': value} from Prices source data*/
export const modifiedPrices = (prices) => {
    return prices.reduce((acc, curr) => {
        acc[curr.drink_name] = curr.prices;
        return acc;
    }, {});
};

/* Simplified Orders source as combine all orders and total ordered amount for each user

i.e.,
{
    "user":{
        orders:[{drinks:'',size:''}],
        orderedAmount: value,
        paidAmount:value
    }
}

*/
export const userOrderedData = (
    orders,
    simplifiedPrices,
    userTotalPayments
) => {
    return orders.reduce((acc, { user, drink, size }) => {
        if (acc[user]) {
            acc[user].orderedAmount += simplifiedPrices[drink][size];
            acc[user].orders.push({
                drink: drink,
                size: size,
            });
        } else {
            acc[user] = {
                orders: [{ drink: drink, size: size }],
                orderedAmount: simplifiedPrices[drink][size],
                paidAmount: userTotalPayments[user],
            };
        }
        return acc;
    }, {});
};

/* Get the remaining balnce of each user

i.e.,

{"user": balancevalue}

*/
export const useOweData = (userOrderedList) => {
    const userOweAmount = {};
    for (let key in userOrderedList) {
        userOweAmount[key] =
            userOrderedList[key].orderedAmount -
            userOrderedList[key].paidAmount;
    }
    return userOweAmount;
};

/* 
export const userOrderedData = (
    orders,
    simplifiedPrices,
    userTotalPayments
) => {
    return orders.reduce((acc, { user, drink, size }) => {
        if (acc[user]) {
            acc[user] = {
                ...acc[user],
                orders: [
                    ...acc[user].orders,
                    {
                        drink: drink,
                        size: size,
                    },
                ],
                orderedAmount:
                    acc[user].orderedAmount + simplifiedPrices[drink][size],
            }; 
            
        } else {
            acc[user] = {
                orders: [{ drink: drink, size: size }],
                orderedAmount: simplifiedPrices[drink][size],
                paidAmount: userTotalPayments[user],
            };
        }
        return acc;
    }, {});
};


export const finalReport = () => {
        console.log('data set', data);
    let data = [];
    for (let user in userOrderedList) {
        console.log('USER', user);
        data.push({
            user,
            orders: userOrderedList[user].orders,
            orderedAmount: userOrderedList[user].orderedAmount,
            paidAmount: userTotalPayments[user],
            oweAmount: userOweAmount[user],
        });
         data.push({
                user,
                orders: userOrderedList[user],
                orderedAmount: userTotalOrdered[user],
                paidAmount: userTotalPayments[user],
                oweAmount: userOweAmount[user],
            }) 
    }
}
 */
/* export const userOrderedData1 = () => {
    return orders.reduce((acc, curr) => {
        if (acc[curr.user]) {
            acc[curr.user].push({
                drink: curr.drink,
                size: curr.size,
            });
        } else {
            acc[curr.user] = [{ drink: curr.drink, size: curr.size }];
        }
        return acc;
    }, {});
}; */

/* const userOrderedAmount = (simplifiedPrices) => {
        return orders.reduce((acc, curr) => {
            if (acc[curr.user]) {
                acc[curr.user] += simplifiedPrices[curr.drink][curr.size];
            } else {
                acc[curr.user] = simplifiedPrices[curr.drink][curr.size];
            }
            return acc;
        }, {});
    }; */

/* const userOrderedPayments = () => {
        let userOrderedAmount = {};
        for (let key in userOrderedData) {
            userOrderedAmount[key] = userOrderedData[key].reduce(
                (acc, { drink, size }) => {
                    return acc + modifiedPrices[drink][size];
                },
                0
            );
        }
        return userOrderedAmount;
    };
    const userOrderedAmount = userOrderedPayments(); */
