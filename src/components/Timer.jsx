import React, { useEffect } from "react";

const Timer = () => {

    const [time, setTime] = React.useState("");
    const [timeid, setTimeId] = React.useState(null);

const settingTimer = (e) =>{
    e.preventDefault();
    setTime(e.target.value);
}
    const setTimer = () => {

        if (!timeid) {

            let id = setInterval(() => {

                setTime((prev) => prev - 1);
            }, 1000);
            setTimeId(id);
           
        }

    }

    useEffect((timeid)=>{

        return clearInterval(timeid);
    },[])
 
  
    
    return (
        <div>
            <h1>TIMER</h1>
            <div><input type="number" placeholder="Enter time in seconds" onChange={settingTimer} /><button onClick={setTimer}>Set</button></div>
            <br />
            <div{...time===0? clearInterval(timeid):""} >Time Remaining : {time} sec</div>
        </div>
    )
}

export default Timer;