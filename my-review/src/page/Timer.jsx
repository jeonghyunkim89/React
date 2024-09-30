// src/App.js
import { useState, useEffect } from 'react';

let timer;

function Timer() {
  const [day, setDay] = useState(new Date());

  useEffect(()=>{
    
    // 1초마다 시간에 대한 정보를 업데이트 
    timer = setInterval(()=>{
      setDay(new Date());
    }, 1000);

    return() => {
      clearInterval(timer);
    }

  }, []);

  const formatDate = day.toLocaleDateString('ko-KR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  });
  const formatTime = day.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <>
        <h1>현재 시간</h1>
        <p>{formatDate}</p>
        <p>{formatTime}</p>
    </>
  );
}

export default Timer;
