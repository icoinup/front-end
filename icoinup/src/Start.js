import React from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Button from './Style';
import {StyledDiv} from './Style';
import AppLogo from './images/Logo/Logo.png';

const Start = (props) => {
	return (
		<>
            <Mobile>
            <StyledDiv>
                <div style={{width:"100%",height:"0px" }}></div> 
                <img src={AppLogo} />
                <div style={{width:"100%",height:"100px" }}></div> 

                    <Link to="/Input"><Button>Join</Button></Link>

            </StyledDiv>
            </Mobile>
            <PC>
                <StyledDiv>
                <div style={{width:"100%",height:"0px" }}></div> 
                <img src={AppLogo} />
                <div style={{width:"100%",height:"50px" }}></div>

                <Link to="/Input"><Button>Join</Button></Link>


                </StyledDiv>
            </PC>
		</>
	);
};

export default Start;