import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Button from './Style';
import {StyledDiv, BackDiv} from './Style';
import {app,db} from "./firebase";
import { collection, getDocs } from "firebase/firestore";

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
var RC = ""
var floor = ""
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

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
          <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="demo-customized-textbox">Student Code</InputLabel> 
              <BootstrapInput id="demo-customized-textbox" />
          </FormControl>
          <hr />
          <div>
          <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">RC</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select"onChange={handleSelectRC} value={SelectedRC}>
                {RCs.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>  
          </Box >
            
            <hr />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Floor</InputLabel>
                <Select onChange={handleSelectFloor} value={SelectedFloor}>
                {floors.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              </FormControl>
            </Box>
            
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

              <Selection />    
          </StyledDiv>
        </Mobile>
            
        <PC>
            <StyledDiv>
              <Selection />
            </StyledDiv>
        </PC>
            
		</>
	);
};



export {RC, floor}

export default Input;