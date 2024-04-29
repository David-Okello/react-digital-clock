import React, { useState, useEffect } from "react";

function DigitalClock({ backgroundImage }) {
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
    <div>
      <div className="blur-filter">
        <span className="font-bold text-slate-300 text-9xl font-mono p-3">
          {time.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}

export default DigitalClock;
