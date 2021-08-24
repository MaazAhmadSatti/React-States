import './App.css';
import React, {useState} from 'react';
import './Room.css'

function Room() {

    let[isLit, setLit] = useState(false);

  return (
    <div className="App" className={`room ${isLit ? 'lit':'dark'}`}>
      The Room is {isLit? 'lit':'dark'}
      <br/>
      <button onClick={()=> setLit(!isLit)}>Toggle Light</button>
    </div>
  );
}

export default Room;
