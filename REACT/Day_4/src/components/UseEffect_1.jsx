import React, { useEffect, useState } from 'react'

const UseEffect_1 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = (`Count is: ${count}`)
    },[count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default UseEffect_1
