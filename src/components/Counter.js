import {useState} from "react"

function Counter(){

    const[count,setcount]=useState(0)

    function inc()
    {
        setcount(count+1)
    }
    function dec()
    {
        setcount(count-1)
    }

    return(
        <div className="box">
        <div className="count">
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
        </div>
    )
}

export default Counter