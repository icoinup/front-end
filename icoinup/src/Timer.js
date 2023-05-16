import { useEffect, useState, useRef } from "react";
import { doc, collection, getDocs, updateDoc } from "firebase/firestore";
import { usePushNotification } from './notification';
import {app,db} from "./firebase";
import {RC, floor} from './Main';




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
const Timer = () => {
  const [time, setTime] = useState(30); // Remaining time in seconds
  const [datas, setDatas] = useState([]);
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
       /* let currentTimestamp = Date.now()
        console.log(Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp-datas[0].time))
        let hours = new Intl.DateTimeFormat('en-US', { hour: 'numeric',hour12: false}).format(currentTimestamp-datas[0].time)
        let minutes = Number(new Intl.DateTimeFormat('en-US', { minute: '2-digit'}).format(currentTimestamp-datas[0].time))
        let seconds = Number(new Intl.DateTimeFormat('en-US', {second: '2-digit' }).format(currentTimestamp-datas[0].time))
        hours=hours-9;
        console.log(hours, minutes, seconds)
        var totalsec = 38*60 - (hours*3600+minutes*60+seconds)
        console.log(totalsec)
        setTime(totalsec)*/
   
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
    if (time > 0) {
      timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      
      alert("Time OVER!");
      setTime(0);
      UpdateBool();
      // fireNotificationWithTimeout('iCoinUp 메시지', 5000, {
      //   body: "세탁기 끝!!!",
      // });
    }
  }, [time]);

  return (
    <div>
      <div style={{fontSize:"100px", textAlign:"center"}}>
        <span>{parseInt(time / 60)}</span>
        <span> : </span>
        <span>{getSeconds(time)}</span>
      </div>
    </div>
  );
};

export default Timer;
