import React, { useState } from 'react';
import photo1 from "./assets/lamp_off.jpg";
import photo2 from "./assets/lamp_on.jpg";

function Photo() {
  const [current, setPhoto] = useState(photo1); 
  const swapPhoto = () => {
    setPhoto(prevPhoto => prevPhoto === photo1 ? photo2 : photo1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Toggle Photo Example</h2>
      <div>
        <img src={current} alt="Current Photo" width="150" height="150" />
      </div>
      <button onClick={swapPhoto}>Turning off/on</button>
    </div>
  );
}

export default Photo;
