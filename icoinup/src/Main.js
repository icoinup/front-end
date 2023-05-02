import React from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Header from './Header.js';
import Button from './Style';
import {StyledDiv} from './Style';

const Main = (props) => {
	return (
		<>
        
        <Mobile>
            <Header/>
			<StyledDiv style={{background:"white"}}>
			<h3>안녕하세요. 메인페이지 입니다.APP</h3>
			<ul>
				<Link to="/QR"><Button>Start</Button></Link>
			
			</ul>
            </StyledDiv>

        </Mobile>
        <PC>
            <Header/>
            <StyledDiv style={{background:"white"}}>
			<h3>안녕하세요. 메인페이지 입니다.PC</h3>
			<ul>
				<Link to="/QR"><Button>Start</Button></Link>
			
			</ul>
            </StyledDiv>
        </PC>
		</>
	);
};

export default Main;