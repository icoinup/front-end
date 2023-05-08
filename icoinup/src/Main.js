import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Header from './Header.js';
import Button from './Style';
import {StyledDiv} from './Style';
import { doc, collection, getDocs, updateDoc } from "firebase/firestore";
import {app,db} from "./firebase";
import { useLocation } from "react-router-dom"
import Timer from './Timer';

const Readdata = (props) => {
    const [datas, setDatas] = useState([]);
	const location = useLocation();
    console.log(location.state.RC)
	console.log(location.state.floor)
    let currentTimestamp = Date.now()
    console.log(currentTimestamp); // get current timestamp
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
    const fetchPost = async () => {
       
        await getDocs(collection(db, location.state.RC+location.state.floor))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setDatas(newData);                
                console.log(datas, newData);
            })
       
    }
    const UpdateTime = async (e) => {
        e.preventDefault();  
        currentTimestamp = Date.now()
        try {
            const washingmachine = doc(db, location.state.RC+location.state.floor, "1");
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
            {datas.map((item) => (
                <p> {item.using.toString()} {Intl.DateTimeFormat('en-US', { hour: '2-digit',minute: '2-digit', second: '2-digit' }).format(currentTimestamp-(item.time))}</p>
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
			<div><h3>안녕하세요. 메인페이지 입니다.APP</h3></div>
			<Timer></Timer>
			<ul>
				<Link to="/QR"><Button >Start</Button></Link>

			</ul>
            </StyledDiv>

        </Mobile>
        <PC>
            <Header/>
            <StyledDiv style={{background:"white"}}>
			<h3>안녕하세요. 메인페이지 입니다.PC</h3>
			<Timer></Timer>
			<ul>
				<Link to="/QR"><Button>Start</Button></Link>
			
			</ul>
			
            </StyledDiv>
			<Readdata />
        </PC>
		</>
	);
};


export default Main;