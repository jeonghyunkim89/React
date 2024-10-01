import { useEffect, useState } from "react";

function Stopwatch (){
    // 1. 스톱 워치가 작동(running) 하고 있는지 여부
    const [running, isRunning] = useState(false);
    // 2. 실시간으로 측정되고 있는 시간
    const [time, setTime] = useState(0);

    useEffect(()=>{
        let timer;

        if (running) {
            timer = setInterval(()=>{
                setTime(t => t + 1);
            }, 1000); 
        }

        return()=>clearInterval(timer);

    }, [running]);
   
    return(
        <>
            <div>
                <h1>Stopwatch</h1>
            </div>
            <div>
                <h3>{parseInt(time/60)} : {time%60}</h3>
            </div>
            <div>
                <button onClick={()=>{isRunning(true);}}>Start</button>
                <button onClick={()=>{isRunning(false);}}>Stop</button>
                <button type="reset" onClick={()=>{isRunning(false); setTime(0);}}>Reset</button>
            </div>
        </>
    )
}

export default Stopwatch;