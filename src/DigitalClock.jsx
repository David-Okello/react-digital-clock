import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="blur-filter p-2 md:p-4 lg:p-6">
      <span className="font-bold text-slate-300 text-4xl md:text-6xl lg:text-9xl font-mono p-3">
        {time.toLocaleTimeString()}
      </span>
    </div>
  );
}

export default DigitalClock;
