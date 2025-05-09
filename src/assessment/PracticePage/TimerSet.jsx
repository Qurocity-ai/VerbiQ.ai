import React, { useState, useEffect } from 'react'

function TimerSet() {
  // Timer state
  const [time, setTime] = useState({ minutes: 2, seconds: 20 });

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div>
       {/* Timer Fixed on Right */}
       <div className="absolute top-[108px] right-6 text-[#C9C9C9] text-sm font-medium px-4 py-2 ">
        {`${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')} mins`}
      </div>

    
     
      
       
     
    </div>
    
  )
}

export default TimerSet
