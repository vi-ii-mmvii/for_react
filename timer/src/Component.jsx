import React, { useState } from "react";
import Timer from "./Timer";

export function Component() {
  const [IntervalValue, setIntervalValue] = useState(null);

  const handleIntervalClick = (id) => {
    setIntervalValue(id);
  };

  return (
    <div className="container">
      <Timer intervalValue={IntervalValue}></Timer>
      <button onClick={() => handleIntervalClick(100)}>
        100ms
      </button>
      <button onClick={() => handleIntervalClick(500)}>
        500ms
      </button>
      <button onClick={() => handleIntervalClick(1000)}>
        1s
      </button>
    </div>
  );
}