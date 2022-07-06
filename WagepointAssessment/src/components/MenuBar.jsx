import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uId } from 'uuid';

const menuLists = [
    { id: 0, name: 'Home', to: '/' },
    { id: 1, name: 'Dashboard', to: '/dashboard' },
    { id: 2, name: 'OrderedLists', to: '/orders' },
];

const MenuBar = () => {
    return (
        <>
            {menuLists.map(({ name, to }) => {
                return (
                    <NavLink
                        key={uId()}
                        to={to}
                        className={({ isActive }) =>
                            isActive ? 'active' : 'disactive'
                        }
                    >
                        {name}
                    </NavLink>
                );
            })}
        </>
    );
};

export default MenuBar;
