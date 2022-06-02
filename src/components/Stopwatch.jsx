import React from 'react';

const Stopwatch =()=>{

    const [timerId ,setTimerId] =React.useState(null);
    const [timer ,setTimer] = React.useState(1);

    function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
      }
    const start =()=>{

        if(!timerId){

            let id = setInterval(() =>{
                setTimer((prev)=>prev+1000);
            },1000);
            setTimerId(id);
            
        }
        
    };
    const pause =()=>{
        clearInterval(timerId);     
        setTimerId(null);
    };
    const reset =()=>{
        clearInterval(timerId);
     
        setTimer(0);
        setTimerId(null);
    };
    return (
        <div>
            <h1>STOPWATCH</h1>
            <h1>{msToTime(timer)}</h1>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default Stopwatch ;