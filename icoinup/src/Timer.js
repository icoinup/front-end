import { useEffect, useState } from "react";

const getSeconds = (time) => {
  const seconds = Number(time % 60);
  if (seconds < 10) {
    return "0" + String(seconds);
  } else {
    return String(seconds);
  }
};

const Timer = () => {
  const [time, setTime] = useState(300); // Remaining time in seconds

  useEffect(() => {
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
    }
  }, [time]);

  return (
    <div>
      <h1>Remaining Time</h1>
      <div>
        <span>{parseInt(time / 60)}</span>
        <span> : </span>
        <span>{getSeconds(time)}</span>
      </div>
    </div>
  );
};

export default Timer;
