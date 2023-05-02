import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.jpg';
function Header(props) {
    return (
        <>
            <div style={{background: "#CBE6F9"}}>
            <img src={Logo}  width='200'/>
            </div>
        </>
    );
}

export default Header;