import reactLogo from "./assets/react.svg";
import { useState } from "react";
//UseState
function Video(props) {
    const {key, likes, name, desc} = props

    const [count, setCount] = useState(likes); 
    const handleClick = () => {
      setCount(count + 1); 
    };

//hooks

    return (
            <div id={"video-"+key} className='video'>
              <img className='video-img' src={reactLogo} alt="viding"/>
              <p>{name || "video 1"}</p>
              <p>{desc || "Kumbel 1"}</p>
              <div className='video-footer'>
                <p>Likes: {count || 0} </p>
                <button onClick={handleClick}>Like</button>
              </div>
            </div>
      )
    }
  
    export default Video;
