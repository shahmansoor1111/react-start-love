import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const[time,setTime] = useState(0)

  useEffect(() => {
    const time = setInterval(()=> {
      setTime(prevSecond =>prevSecond +1)
    },1000)
    return() => {
      clearInterval(time)
    }
  })
 

  return (
    <div>
     <h1>{time}</h1>
    </div>
  )
}

export default App
