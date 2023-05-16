import React from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Button from './Style';
import {StyledDiv} from './Style';

function Footer(props) {
    return (
        <>
        <Mobile>
            <StyledDiv style={{padding:"20px", height:"80px"}}>
            <Link to={`/QR`}  ><Button >Start</Button></Link>
            </StyledDiv>
        </Mobile>
        
            
        </>
    );
}

export default Footer;