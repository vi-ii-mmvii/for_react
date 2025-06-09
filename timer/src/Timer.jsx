import { useEffect, useState } from "react";

function Timer({ intervalValue }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let intervalId; 

    if (typeof intervalValue === 'number' && intervalValue > 0) {
      intervalId = setInterval(() => {
        setValue((prevValue) => prevValue + 1);
      }, intervalValue);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalValue]);

  return (
    <div className="container">
      <h1>Timer</h1>
      <h2>{value}</h2>
    </div>
  );
}

export default Timer;