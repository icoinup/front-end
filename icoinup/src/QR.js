import React from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Header from './Header.js';
import {StyledDiv} from './Style';
import Button from './Style';
const QR = (props) => {
	return (
		<>
        <Mobile>
            <Header/>
            <StyledDiv style={{background:"white"}}>
			    <h3>안녕하세요. QR APP</h3>
            </StyledDiv>

        </Mobile>
        <PC>
            <Header/>
            <StyledDiv style={{background:"white"}}>
                <h3>안녕하세요. QR 입니다.PC</h3>
            </StyledDiv>
			
			
        </PC>
		</>
	);
};

export default QR;