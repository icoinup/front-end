import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Header from './Header.js';
import Button from './Style';
import {StyledDiv} from './Style';
import {RC, floor} from './Input';
import { doc, collection, getDocs, updateDoc } from "firebase/firestore";
import {app,db} from "./firebase";
import { useLocation } from "react-router-dom"
import Timer from './Timer';

const Readdata = (props) => {
    const [datas, setDatas] = useState([]);
	
    let currentTimestamp = Date.now()
    console.log(currentTimestamp); // get current timestamp
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
    const fetchPost = async () => {
       
        await getDocs(collection(db, RC+floor))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc,index) => ({...doc.data(), id:doc.id }));
                setDatas(newData);     
                         
                console.log(datas, newData);
            })
       
    }
    const UpdateTime = async (e) => {
        e.preventDefault();  
        currentTimestamp = Date.now()
        try {
            const washingmachine = doc(db, RC+floor, "1");
            const docRef = await updateDoc(washingmachine, {
               time: currentTimestamp
              });
            console.log("Document written with ID: ", );
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    useEffect(()=>{
        fetchPost();
    }, [])

    return(
        <div className="">
            {datas.map((item,index) => (
                <p key={index}> {item.using.toString()} {Intl.DateTimeFormat('en-US', { hour: '2-digit',minute: '2-digit', second: '2-digit' }).format(currentTimestamp-(item.time))}</p>
              ))}
              <button onClick={UpdateTime}>Addtime</button>
        </div>
        
    );
}


const Main = (props) => {
    
    
	return (
		<>
        
        <Mobile>
            <Header/>
			<StyledDiv style={{background:"white"}}>
			<div style={{width:"100%",height:"0px" }}></div>
			<Timer></Timer>
			<div style={{width:"100%",height:"0px" }}></div>
			<ul>
				<Link to="/QR"><Button >Start</Button></Link>

			</ul>
            </StyledDiv>

        </Mobile>
        <PC>
            <Header/>
            <StyledDiv style={{background:"white"}}>
			<div style={{width:"100%",height:"0px" }}></div>
			<Timer></Timer>
			<div style={{width:"100%",height:"0px" }}></div>
			<ul>
            <Link to={`/QR`} ><Button>Start</Button></Link>
			
			</ul>
			
            </StyledDiv>
			<Readdata />
        </PC>
		</>
	);
};

export {RC, floor}
export default Main;