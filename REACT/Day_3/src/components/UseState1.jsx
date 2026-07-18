import React, { useState } from 'react'

const UseState1 = () => {
    const [a,setA]=useState(10)
    const [title,setTitle]=useState('Click Me')
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={()=>setA(a+1)}>INC</button>
      <button onClick={()=>setTitle('Clicked')}>{title}</button>
    </div>
  )
}

export default UseState1
