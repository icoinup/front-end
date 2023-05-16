import React from 'react';
import AppLogo from './images/Logo/Logo.png';
import {Mobile, PC} from './ReactResposive';
import {StyledDiv} from './Style';

const NotFound = () => {
    return (
        <div>
            <Mobile>
            <StyledDiv>
                <div style={{width:"100%",height:"0px" }}></div> 
                <img src={AppLogo} />
                <div style={{width:"100%",height:"50px" }}></div> 
                <p style={{fontSize:"80px"}}>404 Error</p>
                <p style={{fontSize:"30px"}}>Please, go to the back step.</p>

            </StyledDiv>
            </Mobile>
            <PC>
                <StyledDiv>
                <div style={{width:"100%",height:"0px" }}></div> 
                <img src={AppLogo} />
                <div style={{width:"100%",height:"20px" }}></div>
                <p style={{fontSize:"80px"}}>404 Error</p>
                <p style={{fontSize:"30px"}}>Please, go to the back step.</p>

                </StyledDiv>
            </PC>
        </div>
    );
};
  
export default NotFound;