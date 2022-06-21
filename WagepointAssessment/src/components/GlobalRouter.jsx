import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashBoard from './DashBoard';
import HeroBlock from './HeroBlock';
import Orders from './Orders';
import Page404 from './Page404';
const GlobalRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HeroBlock />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    );
};

export default GlobalRouter;
