import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Mobile, PC } from './ReactResposive';
import Header from './Header.js';
import Footer from './Footer.js';
import Button from './Style';
import { StyledDiv } from './Style';
import { Input, RC, floor } from './Input';
import { doc, collection, getDocs, updateDoc } from "firebase/firestore";
import { app, db } from "./firebase";
import { useLocation } from "react-router-dom"
import Timer from './Timer';
import Blue from "./images/WMBlue.png";
import Red from "./images/WMRed.png";
import Status from "./Status";
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


const Readdata = (props) => {
    const [val, setVal] = useState(1);
    const [time1, setTime1] = useState(38 * 60); // Remaining time in seconds
    const [time2, setTime2] = useState(38 * 60); // Remaining time in seconds
    const [time3, setTime3] = useState(38 * 60); // Remaining time in seconds
    const [time4, setTime4] = useState(38 * 60); // Remaining time in seconds
    const [time5, setTime5] = useState(6000 * 60); // Remaining time in seconds
    const [datas, setDatas] = useState([{ time: 5 * 60, using: false }, { time: 5 * 60, using: false }, { time: 5 * 60, using: false }, { time: 5 * 60, using: false }]);
    var currentusing = [];

    var url = window.location.pathname
    let rcfloor = url.split("/");
    var coll = rcfloor[rcfloor.length - 1]


    const fetchPost = async () => {
        currentusing = new Array(4).fill(false);
        await getDocs(collection(db, coll))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc, index) => ({ ...doc.data(), id: doc.id }));
                setDatas(newData);

                console.log(datas, newData);
            })
        let currentTimestamp = Date.now()
        for (var i = 0; i < 4; i++) {

            let hours = new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: false }).format(currentTimestamp - datas[i].time)
            let minutes = Number(new Intl.DateTimeFormat('en-US', { minute: '2-digit' }).format(currentTimestamp - datas[i].time))
            let seconds = Number(new Intl.DateTimeFormat('en-US', { second: '2-digit' }).format(currentTimestamp - datas[i].time))
            hours = hours - 9;

            var totalsec = 38 * 60 - (hours * 3600 + minutes * 60 + seconds)


            if (i === 0) {
                setTime1(totalsec);
            }
            if (i === 1) {
                setTime2(totalsec);
            }
            if (i === 2) {
                setTime3(totalsec);
            }
            if (i === 3) {
                setTime4(totalsec);
            }


        }
    }

    const UpdateBool = async (index, e) => {
        setVal(index)
    };

    const UpdateBoolean = async (index, e) => {
        setVal(index)
    };
    useEffect(() => {
        fetchPost()
        let timerId;
        if (time5 % 1000===0) {
            timerId = setInterval(() => {
                setTime5((prev) => prev - 60);
            }, 1000);
        }
        return () => {
            clearInterval(timerId);
        };
    }, [time5]);
    // useEffect(()=>{
    //     fetchPost()
    // },[val]);
    const UpdateBool1 = async (e) => {

        try {
            const washingmachine = doc(db, coll, "1");
            const docRef = await updateDoc(washingmachine, {
                using: false
            });

            window.location.reload();

            console.log("Document written with ID: ",);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    const UpdateBool2 = async (e) => {


        try {
            const washingmachine = doc(db, coll, "2");
            const docRef = await updateDoc(washingmachine, {
                using: false
            });

            window.location.reload();

            console.log("Document written with ID: ",);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    const UpdateBool3 = async (e) => {


        try {
            const washingmachine = doc(db, coll, "3");
            const docRef = await updateDoc(washingmachine, {
                using: false
            });

            window.location.reload();

            console.log("Document written with ID: ",);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    const UpdateBool4 = async (e) => {


        try {
            const washingmachine = doc(db, coll, "4");
            const docRef = await updateDoc(washingmachine, {
                using: false
            });

            window.location.reload();

            console.log("Document written with ID: ",);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    useEffect(() => {
        
        let timerId;

        if (time1 > 0 && datas[0].using) {
            timerId = setInterval(() => {
                setTime1((prev) => prev - 1);
            }, 1000);
        }
        else {
            setTime1(38 * 60)
        }

        return () => {
            clearInterval(timerId);
        };
    }, [time1]);

    useEffect(() => {
        let timerId;
        if (time2 > 0 && datas[1].using) {
            timerId = setInterval(() => {
                setTime2((prev) => prev - 1);
            }, 1000);
        }
        else {
            setTime2(38 * 60)
        }
        return () => {
            clearInterval(timerId);
        };
    }, [time2]);
    useEffect(() => {
        let timerId;
        if (time3 > 0 && datas[2].using) {
            timerId = setInterval(() => {
                setTime3((prev) => prev - 1);
            }, 1000);
        }
        else {
            setTime3(38 * 60)
        }
        return () => {
            clearInterval(timerId);
        };
    }, [time3]);
    useEffect(() => {
        let timerId;
        if (time4 > 0 && datas[3].using) {
            timerId = setInterval(() => {
                setTime4((prev) => prev - 1);
            }, 1000);
        }
        else {
            setTime4(38 * 60)
        }
        return () => {
            clearInterval(timerId);
        };
    }, [time4]);
    const [playbackRate, setPlaybackRate] = useState(0.75);
    const [play] = useSound(alram, {
        playbackRate,
        volume: 0.5,
    });
    useEffect(() => {
        if (time1 === 1) {
            setPlaybackRate(playbackRate + 0.6);
            play();
        }
        if (time1 === 0) {

            alert("Time OVER!");


            setTime1(38 * 60);
            UpdateBool1();

        }
    }, [time1]);
    useEffect(() => {
        if (time2 === 1) {
            setPlaybackRate(playbackRate + 0.6);
            play();
        }
        if (time2 === 0) {

            alert("Time OVER!");


            setTime2(38 * 60);
            UpdateBool2();

        }
    }, [time2]);
    useEffect(() => {
        if (time3 === 1) {
            setPlaybackRate(playbackRate + 0.6);
            play();
        }
        if (time3 === 0) {

            alert("Time OVER!");


            setTime3(38 * 60);
            UpdateBool3();

        }
    }, [time3]);
    useEffect(() => {
        if (time4 === 1) {
            setPlaybackRate(playbackRate + 0.6);
            play();
        }
        if (time4 === 0) {

            alert("Time OVER!");


            setTime4(38 * 60);
            UpdateBool4();

        }
    }, [time4]);


    return (
        <div className="">
            {(val % 2 !== 0) ? ((val < 2) ? (<div>
                <div style={{ fontSize: "100px", textAlign: "center" }}>
                    <span>{parseInt(time1 / 60)}</span>
                    <span> : </span>
                    <span>{getSeconds(time1)}</span>
                </div>
            </div>) : <div>
                <div style={{ fontSize: "100px", textAlign: "center" }}>
                    <span>{parseInt(time3 / 60)}</span>
                    <span> : </span>
                    <span>{getSeconds(time3)}</span>
                </div>
            </div>) : ((val < 3) ? (<div>
                <div style={{ fontSize: "100px", textAlign: "center" }}>
                    <span>{parseInt(time2 / 60)}</span>
                    <span> : </span>
                    <span>{getSeconds(time2)}</span>
                </div>
            </div>) : <div>
                <div style={{ fontSize: "100px", textAlign: "center" }}>
                    <span>{parseInt(time4 / 60)}</span>
                    <span> : </span>
                    <span>{getSeconds(time4)}</span>
                </div>
            </div>)}
            <div style={{ width: "100%", height: "30px" }}></div>

            {datas.map((item, index) => (
                item.using ? <button key={index} style={{ background: 'transparent', padding: 10, border: 0 }} onClick={(e) => UpdateBool(index + 1, e)}> <img src={Red}></img></button> : <button key={index} style={{ background: 'transparent', padding: 10, border: 0 }} onClick={(e) => UpdateBoolean(index + 1, e)}><img src={Blue}></img></button>
            ))}
            {/* <button onClick={UpdateTime}>Addtime</button>  */}
        </div>

    );
}


const Main = ({ match, props }) => {
    // console.log(props.children)
    return (
        <>

            <Mobile>
                <Header />
                <StyledDiv style={{ background: "white" }}>

                    <Readdata name="" />
                    <div style={{ width: "100%", height: "10px" }}></div>

                </StyledDiv>
                <Footer />

            </Mobile>
            <PC>
                <Header />
                <StyledDiv style={{ background: "white" }}>

                    <Readdata name="" />
                    <div style={{ width: "100%", height: "60px" }}></div>
                    <Link to={`/QR`}  ><Button >Start</Button></Link>
                </StyledDiv>

            </PC>
        </>
    );
};

export { RC, floor }
export default Main;