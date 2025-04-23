

import { useEffect, useRef, useState } from 'react'
import './App.css'
// import HistoryCounter from './components/HistoryCounter';

function App() {

  
  
  const [counter, setCounter] = useState(0);
  const [isRunning,setIsRunning] = useState(false)
  const timeRef = useRef(null);

  useEffect(()=>{
    if(isRunning){
      timeRef.current = setInterval(() => {
       setCounter((prev)=>{
        return prev < 15 ? prev + 1 : 0 
       }) 
      }, 1000);
    }
    return () => clearInterval(timeRef.current)
  },[isRunning])

  const handleStart = () =>{
    if(!isRunning){
      setIsRunning(true)
    }
  }
 
  const handleStop = () =>{
    setIsRunning(false)
    clearInterval(timeRef.current)
  }

  


  return (
    <>
    {/* <HistoryCounter /> */}
     <h1 className='font-bold'>Counter:{counter} </h1>
     <button onClick={handleStart}>Start</button>
     <button onClick={handleStop}>Stop</button>
    </>
  )
}

export default App
