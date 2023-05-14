import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Button from './Style';
import {StyledDiv, BackDiv} from './Style';
import {app,db} from "./firebase";
import { collection, getDocs } from "firebase/firestore";

var RC = ""
var floor = ""

const Selection = () => {
    const RCs = [" ","Bethel", "Grace", "Vision", "Rothem","Hayongjo","Carmichael","Creation","Papyrus"];
    const [SelectedRC, setSelectedRC] = useState("");
    const floors= [" ", "1F", "2F", "3F", "4F", "5F","6F"];
    const [SelectedFloor, setSelectedFloor] = useState("");
    const handleSelectFloor = (e) => {
        setSelectedFloor(e.target.value);
        floor= e.target.value;
      };

      const handleSelectRC = (e) => {
        setSelectedRC(e.target.value);
      RC = e.target.value;
      };
      return (
        <div className="Selections">
          <h1>Select your RC</h1>
          <div>
            <select onChange={handleSelectRC} value={SelectedRC}>
              {RCs.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <hr />
            <select onChange={handleSelectFloor} value={SelectedFloor}>
              {floors.map((item) => (
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
          
          <Link to={{pathname:  `/Main/${SelectedRC+SelectedFloor}`, state: { floor: SelectedFloor, RC: SelectedRC}}}><Button>Next</Button></Link>
          </ul>
        </div>
      );
}


const Input = (props) => {
	return (
		<>
        <Mobile>
          <StyledDiv>
                <h3 style={{color:"white",fontSize:"50px" }}>Icoin Up</h3><br/>
                    <Selection />    
            </StyledDiv>

            </Mobile>
            
            <PC>
                <StyledDiv>
                <h3 style={{color:"white",fontSize:"50px" }}>Icoin Up</h3><br/>
                <Selection />
                </StyledDiv>
              

            </PC>
            
		</>
	);
};



export {RC, floor}

export default Input;