import React from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Button from './Style';
import {StyledDiv} from './Style';

const Status = (props) => {
	return (
		<>
            <Mobile>
            <StyledDiv>
                <h3 style={{color:"white",fontSize:"50px" }}>Icoin Up APP</h3><br/>
                <ul>
                    
                   
                </ul>
            </StyledDiv>
            </Mobile>
            <PC>
                <StyledDiv>
                <h3 style={{color:"white",fontSize:"50px" }}>Icoin Up PC</h3><br/>
                <ul>
                    
                    
                </ul>
                </StyledDiv>
            </PC>
		</>
	);
};

export default Status;