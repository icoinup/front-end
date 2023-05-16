import React, { useState, useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Header from './Header.js';
import Button from './Style';
import {StyledDiv} from './Style';
import {Input, RC, floor} from './Input';
import { doc, collection, getDocs, updateDoc } from "firebase/firestore";
import {app,db} from "./firebase";
import { useLocation } from "react-router-dom"
import Timer from './Timer';
import Blue from "./images/WMBlue.png";
import Red from "./images/WMRed.png";
import Status from "./Status";


const Readdata = (props) => {
    
    const [datas, setDatas] = useState([]);
	var currentusing = [];
    let currentTimestamp = Date.now()
    var url = window.location.pathname
    let rcfloor = url.split("/");
    var coll = rcfloor[rcfloor.length-1]

    console.log(currentTimestamp); // get current timestamp
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
    const fetchPost = async () => {
        currentusing = new Array(4).fill(false);
        await getDocs(collection(db, coll))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc,index) => ({...doc.data(), id:doc.id }));
                setDatas(newData);     
                         
                console.log(datas, newData);
            })
        }

    const UpdateBool = async (index, e) => {
        currentTimestamp = Date.now();
        try {
          const updatedDatas = [...datas];
          updatedDatas[index - 1].using = false;
          setDatas(updatedDatas);
          // Update the corresponding document in Firebase if necessary
          const washingmachine = doc(db, coll, String(updatedDatas[index - 1].id));
          await updateDoc(washingmachine, {
            using: false
          });
        } catch (e) {
          console.error("Error updating document: ", e);
        }
      };
    
      const UpdateBoolean = async (index, e) => {
        currentTimestamp = Date.now();
        try {
          const updatedDatas = [...datas];
          updatedDatas[index - 1].using = true;
          setDatas(updatedDatas);
          // Update the corresponding document in Firebase if necessary
          const washingmachine = doc(db, coll, String(updatedDatas[index - 1].id));
          await updateDoc(washingmachine, {
            using: true
          });
        } catch (e) {
          console.error("Error updating document: ", e);
        }
      };
    useEffect(()=>{
        fetchPost()
    }, [])

    return(
        <div className="">
            {/* {datas.map((item,index) => (
                <p key={index}> {item.using.toString()} {Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp-(item.time))}</p>
             
              
              ))} */}
              {datas.map((item,index) => (
                item.using ? <button key={index} style={{background:'transparent',padding: 10, border: 0}} onClick={(e)=>UpdateBool(index+1,e)}> <img src={Red}></img></button> : <button key={index} style={{background:'transparent',padding: 10, border: 0}} onClick={(e)=>UpdateBoolean(index+1,e)}><img src={Blue}></img></button>
              ))}
              {/* <button onClick={UpdateTime}>Addtime</button>  */}
        </div>
        
    );
}


const Main = ({match,props}) => {
    // console.log(props.children)
	return (
		<>
        
        <Mobile>
            <Header/>
			<StyledDiv style={{background:"white"}}>
                <Timer></Timer>
                <div style={{width:"100%",height:"30px" }}></div>
                <Readdata name="" />
                <div style={{width:"100%",height:"30px" }}></div>
                <Link to="/QR"><Button >Start</Button></Link>
                <div style={{width:"100%",height:"30px" }}></div>
                
            </StyledDiv>

        </Mobile>
        <PC>
            <Header/>
            <StyledDiv style={{background:"white"}}>
                <Timer></Timer>
                <div style={{width:"100%",height:"30px" }}></div>
                <Readdata name="" />
                <div style={{width:"100%",height:"0px" }}></div>
                <Link to={`/QR`} ><Button>Start</Button></Link>
                
                </StyledDiv>
			
        </PC>
		</>
	);
};

export {RC, floor}
export default Main;