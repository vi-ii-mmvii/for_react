import React from 'react';
import ReactDOM from 'react-dom/client';
import Appp from './App1.jsx'; // for lamp
//import App from './App.jsx' - for video scrolling 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appp />
   {/*<App /> for videos*/}
  </React.StrictMode>
);
