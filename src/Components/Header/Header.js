import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import logo from '../../logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='headerStyle'>
            <img src={logo} alt="" />
            <div className='menuStyle'>
                <a href="/home">Home</a>
                <a href="/about us">About Us</a>
                <a href="/success">Success</a>
                <a href="/login">Login</a>
            </div>
            <FontAwesomeIcon id='bar-style' icon={faBars}></FontAwesomeIcon>
        </div>
    );
};

export default Header;