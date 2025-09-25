
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'





function App() {
  const[name,setName] = useState("")
  




  return (
   <div>
   
    <Card name = {name} setName = {setName} />
   </div>
  )
  }
  
  


export default App
