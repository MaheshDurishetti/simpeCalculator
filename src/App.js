import index from './index.js'
import log from './reportWebVitals.js'
import Keyboard from './keypad.js'
import './App.css'
import { useState } from 'react'
function App(){
  let [num,setNum]=useState('')
  function handle(value){
setNum(num+value)
  }
  function clear(value){
    setNum('')
      }
  function operate(){
    let op=eval(num)
   setNum(op)
  }
  return (<div className='container'>
    <input type='text'  className='output' value={num}/>
    <Keyboard handle={handle} operate={operate} clear={clear}/>
  </div>)
}
export default App