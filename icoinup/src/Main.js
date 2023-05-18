import React, { useState, useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Header from './Header.js';
import Footer from './Footer.js';
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
    
    
    const UpdateBool = async (value,e) => {
        
        
        currentTimestamp = Date.now()
        try {
            const washingmachine = doc(db, coll, String(value));
            const docRef = await updateDoc(washingmachine, {
               using : false
              });
            console.log("Document written with ID: ", );
            window.location.reload();
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const UpdateBoolean = async (value,e) => {
        
        
        currentTimestamp = Date.now()
        try {
            const washingmachine = doc(db, coll, String(value));
            const docRef = await updateDoc(washingmachine, {
               using : true
              });
            console.log("Document written with ID: ", );
            window.location.reload();
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
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
                <div style={{width:"100%",height:"10px" }}></div>
                
            </StyledDiv>
            <Footer/>

        </Mobile>
        <PC>
            <Header/>
            <StyledDiv style={{background:"white"}}>
                <Timer></Timer>
                <div style={{width:"100%",height:"30px" }}></div>
                <Readdata name="" />
                <div style={{width:"100%",height:"10px" }}></div>
            </StyledDiv>
			
        </PC>
		</>
	);
};

export {RC, floor}
export default Main;