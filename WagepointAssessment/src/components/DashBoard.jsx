import React, { useState, useId, useEffect } from 'react';
import '../css/Dashboard.css';
import Loading from './Loading';
const DashBoard = () => {
    const globalID = useId();
    const [pricesData, setPricesData] = useState({
        results: [],
        loading: false,
    });
    const fetchData = async () => {
        const data = await import('../data/prices.json');
        return data.default;
    };
    useEffect(() => {
        setPricesData((prev) => {
            return {
                ...prev,
                loading: true,
            };
        });
        fetchData().then((res) => {
            console.log('fetch data', res);
            setPricesData((prev) => {
                return {
                    ...prev,
                    results: res,
                    loading: false,
                };
            });
        });
    }, []);

    const { results, loading } = pricesData;
    return loading ? (
        <Loading />
    ) : (
        <section className='dashboard-container'>
            <div className='dasboard-headings'>
                <div className='drinks'>Drinks</div>
                <div className='sizes'>Sizes</div>
                <div className='prices'>Prices</div>
            </div>
            {results?.map(
                ({
                    drink_name,
                    prices: { small, medium, large, huge, mega, ultra },
                }) => {
                    return (
                        <div key={globalID} className='dashboard-data'>
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
