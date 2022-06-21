import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashBoard from './DashBoard';
import HeroBlock from './HeroBlock';
import Orders from './Orders';
const GlobalRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HeroBlock />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/orders' element={<Orders />} />
        </Routes>
    );
};

export default GlobalRouter;
