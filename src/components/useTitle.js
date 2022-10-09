import React, { useState } from 'react'

export default function useTitle() {
    const [count, setCount] = useState(0)
    return( <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)} >update</button>
      </div>)
}
