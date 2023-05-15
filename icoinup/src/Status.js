import React from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Button from './Style';
import {StyledDiv} from './Style';
import Blue from './images/WMBlue.png';
import Red from './images/WMRed.png';

const Status = (props) => {
	return (
		<>
            <Mobile>
                <div>
                    <img src={Blue}></img>
                    <img src={Red}></img>
                    <img src={Blue}></img>
                    <img src={Red}></img>
                </div>
            </Mobile>
            <PC>
                <div>
                    <img src={Blue}></img>
                    <img src={Red}></img>
                    <img src={Blue}></img>
                    <img src={Red}></img>
                </div>
            </PC>
		</>
	);
};

export default Status;