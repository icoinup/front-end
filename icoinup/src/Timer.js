import { useEffect, useState, useRef } from "react";
import { doc, collection, getDocs, updateDoc } from "firebase/firestore";
import { usePushNotification } from './notification';
import {app,db} from "./firebase";
import {RC, floor} from './Main';
import useSound from 'use-sound';
import alram from './sounds/alram.mp3';

const getSeconds = (time) => {
  const seconds = Number(time % 60);
  if (seconds < 10) {
    return "0" + String(seconds);
  } else {
    return String(seconds);
  }
};
function sleep(sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
} 

  


const Timer = (props) => {
  const [time1, setTime1] = useState(38*60); // Remaining time in seconds
  const [time2, setTime2] = useState(38*60); // Remaining time in seconds
  const [time3, setTime3] = useState(38*60); // Remaining time in seconds
  const [time4, setTime4] = useState(38*60); // Remaining time in seconds
  const [datas, setDatas] = useState([{time: 38*60, using:false},{time: 38*60, using:false},{time: 38*60, using:false},{time: 38*60, using:false}]);
  
  var url = window.location.pathname
  let rcfloor = url.split("/");
  var coll = rcfloor[rcfloor.length-1]
  
  const fetchPost = async () => {
       
    await getDocs(collection(db, coll))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc,index) => ({...doc.data(), id:doc.id }));
            setDatas(newData);     
                     
            
        })
        let currentTimestamp = Date.now()
        for(var i = 0; i<4;i++){
          
          let hours = new Intl.DateTimeFormat('en-US', { hour: 'numeric',hour12: false}).format(currentTimestamp-datas[i].time)
          let minutes = Number(new Intl.DateTimeFormat('en-US', { minute: '2-digit'}).format(currentTimestamp-datas[i].time))
          let seconds = Number(new Intl.DateTimeFormat('en-US', {second: '2-digit' }).format(currentTimestamp-datas[i].time))
          hours=hours-9;

          var totalsec = 38*60 - (hours*3600+minutes*60+seconds)
          
          if(i===0){
            setTime1(totalsec);
          }
          if(i===1){
            setTime2(totalsec);
          }
          if(i===2){
            setTime3(totalsec);
          }
          if(i===3){
            setTime4(totalsec);
          }


        }
        
   
}

const UpdateBool = async (e) => {     

  
  try {
      const washingmachine = doc(db, coll, "1");
      const docRef = await updateDoc(washingmachine, {
         using: false
        });
        
        window.location.reload();
        
      console.log("Document written with ID: ", );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

  useEffect(() => {
    fetchPost();
    let timerId;
  
    if (time1>0 && datas[0].using) {
      timerId = setInterval(() => {
        setTime1((prev) => prev - 1);
      }, 1000);
    }
    else{
      setTime1(38*60)
    }

    return () => {
      clearInterval(timerId);
    };
  }, [time1]);

  useEffect(() => {
    let timerId;
    if (time2>0 && datas[1].using){
      timerId = setInterval(()=> {
        setTime2((prev)=> prev -1);
      }, 1000);
    }
    else{
      setTime2(38*60)
    }
    return () => {
      clearInterval(timerId);
    };
  },[time2]);
  useEffect(() => {
    let timerId;
    if (time3>0 && datas[2].using){
      timerId = setInterval(()=> {
        setTime3((prev)=> prev -1);
      }, 1000);
    }
    else{
      setTime3(38*60)
    }
    return () => {
      clearInterval(timerId);
    };
  },[time3]);
  useEffect(() => {
    let timerId;
    if (time4>0 && datas[3].using){
      timerId = setInterval(()=> {
        setTime4((prev)=> prev -1);
      }, 1000);
    }
    else{
      setTime4(38*60)
    }
    return () => {
      clearInterval(timerId);
    };
  },[time4]);
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [play] = useSound(alram, {
    playbackRate,
    volume: 0.5,
  });
  useEffect(() => {
    if(time1===1){
      setPlaybackRate(playbackRate + 0.6);
      play();
    }
    if (time1 === 0) {
      
      alert("Time OVER!");
      

      setTime1(0);
      UpdateBool();
      
    }
  }, [time1]);
  if(props.val === 1 ){
    return (
      <div>
        <div style={{fontSize:"100px", textAlign:"center"}}>
          <span>{parseInt(time1 / 60)}</span>
          <span> : </span>
          <span>{getSeconds(time1)}</span>
        </div>
      </div>
    );
  }
  if(props.val === 2 ){
    return (
      <div>
        <div style={{fontSize:"100px", textAlign:"center"}}>
          <span>{parseInt(time2 / 60)}</span>
          <span> : </span>
          <span>{getSeconds(time2)}</span>
        </div>
      </div>
    );
  }
  if(props.val === 3 ){
    return (
      <div>
        <div style={{fontSize:"100px", textAlign:"center"}}>
          <span>{parseInt(time3 / 60)}</span>
          <span> : </span>
          <span>{getSeconds(time3)}</span>
        </div>
      </div>
    );
  }
  if(props.val === 4 ){
    return (
      <div>
        <div style={{fontSize:"100px", textAlign:"center"}}>
          <span>{parseInt(time4 / 60)}</span>
          <span> : </span>
          <span>{getSeconds(time4)}</span>
        </div>
      </div>
    );
  }
  
};

export default Timer;
