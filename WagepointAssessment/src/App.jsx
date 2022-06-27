import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/App.css';
import GlobalRouter from './components/GlobalRouter';
import MenuBar from './components/MenuBar';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <p>Welcome to coffee barista</p>
            </header>
            <menu className='menu'>
                <MenuBar />
            </menu>
            <main>
                <GlobalRouter />
            </main>
        </div>
    );
}

export default App;
