import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add1, addCustom, resetCounter } from '../features/counterSlice';

export default function Counter() {
  const dispatch=useDispatch();
  const {counter,user}=useSelector(myStore=>myStore.counterSlice)
    return (
  <div className='container'>
<h2>COunter:{counter}</h2>
 <button onClick={()=>{dispatch(add1())}}>add1</button>
 <button onClick={()=>{dispatch(resetCounter())}}>reduce</button>
 <button onClick={()=>{addCustom({val:6})}}>add 6</button>
 
 
  </div>
  )
}
