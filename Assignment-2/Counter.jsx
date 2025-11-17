import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);

    const Increment =() =>{
        setCount(count+1)
    }
     const Decrement =() =>{
        setCount(count-1)
     }
      const Reset =() =>{
        setCount(0)
      }
      return (
    <div>
        <h1>{count}</h1>
      <button onClick={Increment}>Add</button>
       <button onClick={Decrement}>Minus</button>
       <button onClick={Reset}>Zero</button>
    </div>
  )
}

export default Counter
