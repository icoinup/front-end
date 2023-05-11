import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo/apple-icon-72x72.png';
import AppLogo from './images/Logo/android-icon-72x72.png';
import {Mobile, PC} from './ReactResposive';
function Header(props) {
    return (
        <>
        <Mobile>
            <div style={{background: "#CBE6F9",padding:"20px"}}>
            <img src={AppLogo}  style={{margin:"auto",display: "block"}}/>
            </div>
        </Mobile>
        <PC>
        <div style={{background: "#CBE6F9", padding:"15px"}}>
            <img src={Logo} />
            </div>
        </PC>
            
        </>
    );
}

export default Header;