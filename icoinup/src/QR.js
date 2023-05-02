import React from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Header from './Header.js';
import {StyledDiv} from './Style';
import Button from './Style';
import QR_Scanner from './QR_Scanner';
const QR = (props) => {
	return (
		<>
        <Mobile>
            <Header/>
            <StyledDiv style={{background:"white"}}>
                <QR_Scanner/>
            </StyledDiv>

        </Mobile>
        <PC>
            <Header/>
            <StyledDiv style={{background:"white"}}>
                <QR_Scanner/>
            </StyledDiv>
			
			
        </PC>
		</>
	);
};

export default QR;