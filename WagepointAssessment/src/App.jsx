import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/App.css';
import GlobalRouter from './components/GlobalRouter';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <p>Welcome to coffee barista</p>
            </header>
            <menu className='menu'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive ? 'active' : 'disactive'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to='/dashboard'
                    className={({ isActive }) =>
                        isActive ? 'active' : 'disactive'
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to='/orders'
                    className={({ isActive }) =>
                        isActive ? 'active' : 'disactive'
                    }
                >
                    OrderedLists
                </NavLink>
            </menu>
            <main>
                <GlobalRouter />
            </main>
        </div>
    );
}

export default App;
