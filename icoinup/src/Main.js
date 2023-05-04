import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Mobile, PC} from './ReactResposive';
import Header from './Header.js';
import Button from './Style';
import {StyledDiv} from './Style';
import { collection, getDocs } from "firebase/firestore";
import {app,db} from "./firebase";
import { useLocation } from "react-router-dom"

const Readdata = (props) => {
    const [datas, setDatas] = useState([]);
	const location = useLocation();
    console.log(location.state.RC)
	console.log(location.state.floor)
    const fetchPost = async () => {
       
        await getDocs(collection(db, location.state.RC+location.state.floor))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setDatas(newData);                
                console.log(datas, newData);
            })
       
    }
    useEffect(()=>{
        fetchPost();
    }, [])

    return(
        <div className="">
            {datas.map((item) => (
                <p> {item.using.toString()} {item.time}</p>
              ))}
        </div>
    );
}

const Main = (props) => {
	return (
		<>
        
        <Mobile>
            <Header/>
			<StyledDiv style={{background:"white"}}>
			<h3>안녕하세요. 메인페이지 입니다.APP</h3>
			<ul>
				<Link to="/QR"><Button>Start</Button></Link>

			</ul>
            </StyledDiv>

        </Mobile>
        <PC>
            <Header/>
            <StyledDiv style={{background:"white"}}>
			<h3>안녕하세요. 메인페이지 입니다.PC</h3>
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