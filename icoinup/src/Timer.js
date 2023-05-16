import { useEffect, useState } from "react";

const getSeconds = (time) => {
  const seconds = Number(time % 60);
  if (seconds < 10) {
    return "0" + String(seconds);
  } else {
    return String(seconds);
  }
};
<<<<<<< Updated upstream
=======
function sleep(sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
} 
const Timer = (props) => {
  const [time1, setTime1] = useState(30); // Remaining time in seconds
  const [time2, setTime2] = useState(30); // Remaining time in seconds
  const [time3, setTime3] = useState(30); // Remaining time in seconds
  const [time4, setTime4] = useState(30); // Remaining time in seconds
  const [datas, setDatas] = useState([]);
  // const { fireNotificationWithTimeout } = usePushNotification();
  
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
>>>>>>> Stashed changes

const Timer = () => {
  const [time, setTime] = useState(300); // Remaining time in seconds

  useEffect(() => {
    let timerId;
<<<<<<< Updated upstream
    if (time > 0) {
=======
  
    if (time1 > 0) {
>>>>>>> Stashed changes
      timerId = setInterval(() => {
        setTime1((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
<<<<<<< Updated upstream
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      alert("Time OVER!");
      setTime(0);
    }
  }, [time]);

  return (
    <div>
      <h1>Remaining Time</h1>
      <div>
        <span>{parseInt(time / 60)}</span>
        <span> : </span>
        <span>{getSeconds(time)}</span>
=======
  }, [time1]);

  useEffect(() => {
    let timerId;
    if (time2>0){
      timerId = setInterval(()=> {
        setTime2((prev)=> prev -1);
      }, 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  },[time2]);
  useEffect(() => {
    let timerId;
    if (time3>0){
      timerId = setInterval(()=> {
        setTime3((prev)=> prev -1);
      }, 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  },[time3]);
  useEffect(() => {
    let timerId;
    if (time4>0){
      timerId = setInterval(()=> {
        setTime4((prev)=> prev -1);
      }, 1000);
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
      // fireNotificationWithTimeout('iCoinUp 메시지', 5000, {
      //   body: "세탁기 끝!!!",
      // });
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
>>>>>>> Stashed changes
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
