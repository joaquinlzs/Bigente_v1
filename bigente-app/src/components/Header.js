import React from 'react';
import './CSS/Header.css';
import { useDispatch } from 'react-redux';
import { setButtonName } from '../redux/navbarSlice';

function Header() {
    const dispatch = useDispatch();
    
    const handleButtonClick = (buttonName) => {
        dispatch(setButtonName(buttonName));
    };

    return (
        <header className="header">
        <h1 className="page-title">
            <span className="red-text">Bi</span>
            <span className="black-text">gente</span>
        </h1>
        <nav className="navbar">
            <ul className="nav-list">
                <li><button onClick={() => handleButtonClick('chile')}>Chile</button></li>
                <li><button onClick={() => handleButtonClick('energy')}>Energía</button></li>
                <li><button onClick={() => handleButtonClick('crossfit')}>Crossfit</button></li>
                <li><button onClick={() => handleButtonClick('ageofempires')}>Age of Empire</button></li>
            </ul>
        </nav>
        <form className="search-form">
            <input type="text" placeholder="Search" />
            <button type="submit">
                <i className="fas fa-search"></i>
            </button>
        </form>
        </header>
    );
}

export default Header;

