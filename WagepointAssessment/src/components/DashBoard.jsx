import React, { useState, useId, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uId } from 'uuid';
import Loader from './Loader';
import '../css/Dashboard.css';
import { getPricesData } from '../../reduxToolKit/slices/priceSlice';

const DashBoard = () => {
    const { pricesData } = useSelector((store) => store);
    const dispatch = useDispatch();
    const { prices, loading } = pricesData;

    const fetchData = async () => {
        await dispatch(getPricesData());
    };
    useEffect(() => {
        fetchData();
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <section className='dashboard-container'>
            <div className='dasboard-headings'>
                <div className='drinks'>Drinks</div>
                <div className='sizes'>Sizes</div>
                <div className='prices'>Prices</div>
            </div>
            {prices?.map(
                ({
                    drink_name,
                    prices: { small, medium, large, huge, mega, ultra },
                }) => {
                    return (
                        <div key={uId()} className='dashboard-data'>
                            <div>{drink_name}</div>
                            <div className='dashboard-data-prices'>
                                <p>
                                    <span className='alignSizes'>Small</span>
                                </p>
                                <p>
                                    <span>{small ?? 'NA'}</span>
                                </p>
                                <p>
                                    <span className='alignSizes'>Medium</span>
                                </p>
                                <p>
                                    <span>{medium ?? 'NA'}</span>
                                </p>
                                <p>
                                    <span className='alignSizes'>Large</span>
                                </p>
                                <p>
                                    <span>{large ?? 'NA'}</span>
                                </p>
                                <p>
                                    <span className='alignSizes'>Huge</span>
                                </p>
                                <p>
                                    <span>{huge ?? 'NA'}</span>
                                </p>
                                <p>
                                    <span className='alignSizes'>Mega</span>
                                </p>
                                <p>
                                    <span>{mega ?? 'NA'}</span>
                                </p>
                                <p>
                                    <span className='alignSizes'>Ultra</span>
                                </p>
                                <p>
                                    <span>{ultra ?? 'NA'}</span>
                                </p>
                            </div>
                        </div>
                    );
                }
            )}
        </section>
    );
};

export default DashBoard;
