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
			<div><h3>안녕하세요. 메인페이지 입니다.APP</h3></div>
			<Timer></Timer>
			<ul>
				<Link to="/QR"><Button>Start</Button></Link>
			
			</ul>
            </StyledDiv>

        </Mobile>
        <PC>
            <Header/>
            <StyledDiv style={{background:"white"}}>
			<h3>안녕하세요. 메인페이지 입니다.PC</h3>
			<Timer></Timer>
			<ul>
				<Link to="/QR"><Button>Start</Button></Link>
			
			</ul>
            </StyledDiv>
        </PC>
		</>
	);
};

export default Main;