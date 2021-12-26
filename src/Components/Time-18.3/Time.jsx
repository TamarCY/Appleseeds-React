
import React, { useState } from "react";



const Time = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0)
    const updateTime = (e, label) => {
        
        if (e.target.value === 0) {
            setSeconds(0);
            setMinutes(0);
            setHours(0);
        } else {
            if (label === "seconds") {
                setSeconds(e.target.value);
                setMinutes(e.target.value * 60);
                setHours(e.target.value * 3600);
            } else {
                if (label === "minutes"){
                    setSeconds(e.target.value / 60);
                    setMinutes(e.target.value);
                    setHours(e.target.value * 60);
                } else {
                setSeconds(e.target.value / 3600);
                setMinutes(e.target.value /60);
                setHours(e.target.value);
            }
             
        }
    }
}
return (
    <div>
        <label>
            Seconds
            <input type="number"
                value={seconds}
                onChange={
                    (e) => updateTime(e, "seconds")
                }
            />
        </label>
        <br />
        <br />
        <label>
            Minutes
            <input
                value={minutes}
                onChange={
                    (e) => updateTime(e, "minutes")
                }
                type="number" />
        </label>
        <br />
        <br />
        <label>
            Hours
            <input
                value={hours}
                onChange={
                    (e) => updateTime(e, "hours")
                }
                type="number" />
        </label>
    </div>
)
}


export default Time