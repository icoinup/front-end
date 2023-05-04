import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Button from './Style';
import {StyledDiv, BackDiv} from './Style';
import {app,db} from "./firebase";
import { collection, getDocs } from "firebase/firestore";


const Selection = () => {
    const RC = [" ","bethel", "Grace", "Vision", "etc"];
    const [SelectedRC, setSelectedRC] = useState("");
    const floor = [" ", "1F", "2F", "3F", "4F", "5F"];
    const [SelectedFloor, setSelectedFloor] = useState("");
    const handleSelectFloor = (e) => {
        setSelectedFloor(e.target.value);
      };

      const handleSelectRC = (e) => {
        setSelectedRC(e.target.value);
      };
      return (
        <div className="Selections">
          <h1>Select your RC</h1>
          <div>
            <select onChange={handleSelectRC} value={SelectedRC}>
              {RC.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <hr />
            <select onChange={handleSelectFloor} value={SelectedFloor}>
              {floor.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <hr />
            <p>
              Selected: <b>{SelectedRC} {SelectedFloor}</b>
            </p>
          </div>
          <ul>
                    
          <Link to={`/Main`} state={{ floor: SelectedFloor, RC: SelectedRC }} ><Button>Next</Button></Link>
                </ul><br />
        </div>
      );
}


const Input = (props) => {
	return (
		<>
        <Mobile>
        <StyledDiv>
                <h3 style={{color:"white",fontSize:"50px" }}>Icoin Up</h3><br/>
                
                <ul>
                    
                    <Link to="/Main"><Button>Next</Button></Link>
                </ul><br />
                </StyledDiv>
               <BackDiv> <Selection /></BackDiv>
            </Mobile>
            
            <PC>
                <StyledDiv>
                <h3 style={{color:"white",fontSize:"50px" }}>Icoin Up</h3><br/>
                
                <ul>
                    
                    <Link to="/Main"><Button>Next</Button></Link>
                </ul><br />
                </StyledDiv>
               <BackDiv> <Selection /></BackDiv>

            </PC>
            
		</>
	);
};

export default Input;