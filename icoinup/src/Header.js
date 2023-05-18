import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.jpg';
function Header(props) {
    return (
        <>
        <Mobile>
            <div style={{background: "#CBE6F9",padding:"20px"}}>
            <Link to="/"><img src={AppLogo}  style={{margin:"auto",display: "block"}}/></Link>
            </div>
        </Mobile>
        <PC>
        <div style={{background: "#CBE6F9", padding:"15px",display: "flex"}}>
            <Link to="/">
            <img src={Logo} />
            </Link>
            <p style={{fontSize:"20px", fontWeight:"bold", marginLeft:"20px", color:"#37447E"}}>IcoinUP!</p>
            </div>
        </PC>
            
        </>
    );
}

export default Header;