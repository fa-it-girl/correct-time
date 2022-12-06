import React, {useState} from 'react';
import './App.css';

function App() {

  setInterval(clicked, 1000)

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now)

  function clicked(){
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime)
  }


  return (
    <div className='container'>
     <h1 >{time}</h1>
     <button onClick={clicked}>get time</button>

    </div>
  )
}

export default App;
