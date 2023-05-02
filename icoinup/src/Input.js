import React from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Button from './Style';
import {StyledDiv} from './Style';

const Input = (props) => {
	return (
		<>
        <Mobile>
            <StyledDiv>
                <h3 style={{color:"white",fontSize:"50px" }}>Icoin Up</h3><br/>
                <ul>
                    
                    <Link to="/Main"><Button>Next</Button></Link>
                </ul>
            </StyledDiv>
            </Mobile>
            <PC>
                <StyledDiv>
                <h3 style={{color:"white",fontSize:"50px" }}>Icoin Up</h3><br/>
                <ul>
                    
                    <Link to="/Main"><Button>Next</Button></Link>
                </ul>
                </StyledDiv>
            </PC>
		</>
	);
};

export default Input;