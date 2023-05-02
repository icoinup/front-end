import React from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Button from './Style';
import {StyledDiv} from './Style';

const Start = (props) => {
	return (
		<>
            <Mobile>
            <StyledDiv>
                <h3 style={{color:"white",fontSize:"50px" }}>Icoin Up PC</h3><br/>
                <ul>
                    
                    <Link to="/Input"><Button>Join</Button></Link>
                </ul>
            </StyledDiv>
            </Mobile>
            <PC>
                <StyledDiv>
                <h3 style={{color:"white",fontSize:"50px" }}>Icoin Up PC</h3><br/>
                <ul>
                    
                    <Link to="/Input"><Button>Join</Button></Link>
                </ul>
                </StyledDiv>
            </PC>
		</>
	);
};

export default Start;