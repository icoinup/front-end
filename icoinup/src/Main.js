import React from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Header from './Header.js';
import Button from './Style';
import {StyledDiv} from './Style';
import Timer from './Timer';

const Main = (props) => {
	return (
		<>
        
        <Mobile>
            <Header/>
			<StyledDiv style={{background:"white"}}>
			<div style={{width:"100%",height:"0px" }}></div>
			<Timer></Timer>
			<div style={{width:"100%",height:"0px" }}></div>
			<ul>
				<Link to="/QR"><Button>Start</Button></Link>
			
			</ul>
            </StyledDiv>

        </Mobile>
        <PC>
            <Header/>
            <StyledDiv style={{background:"white"}}>
			<div style={{width:"100%",height:"0px" }}></div>
			<Timer></Timer>
			<div style={{width:"100%",height:"0px" }}></div>
			<ul>
				<Link to="/QR"><Button>Start</Button></Link>
			
			</ul>
			
            </StyledDiv>
        </PC>
		</>
	);
};

export default Main;