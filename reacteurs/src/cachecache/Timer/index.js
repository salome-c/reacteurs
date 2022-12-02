import React, {useEffect, useState} from "react";
import './index.css'

//export  default  function index() {
const Timer = () => {
const [time, setTime] = useState(0);
const [startTimer, setStartTimer] = useState(false);

    useEffect(() => {
        if(startTimer){
            const timerId = setInterval(() => {
                setTime(t => t + 1)
            }, 1000);
            return () => clearInterval(timerId)
        }
    }, [startTimer])

    return(
        <div className="container">
            <div className="time">{time}</div>
            <div className="button-wrap">

                <button className="button btn-start" onClick={()=> setStartTimer(true)}>Start</button>

                <button className="button btn-stop" onClick={()=> setStartTimer(false)}>Stop</button>
            </div>
        </div>
    )
}

export default Timer