import {useState} from "react"


function Random()
{

    const [number,setnumber]=useState("number")

    function randomnumber(){
        setnumber(Math.floor(Math.random()*10)+1)
    }
    return(
        <div className="box">
        <div className="number">
           <h1>Random Number Generator</h1>
           <h1>{number}</h1>
           <button onClick={randomnumber}>Generate</button> 
        </div>
        </div>
    )
}

export default Random