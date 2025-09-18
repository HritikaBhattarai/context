import {useState} from "react"
const Counter = () =>{
    const [count,setCount]= useState(0);
    const [rcounter,setRcounter]= useState(10);
    return(
        <div>
            <h1>R Counter:{rcounter}</h1>
            <h1>Counter:{count}</h1>
            <button onClick={() => setCount(count+1)}>Update Counter</button>
            <button onClick={() => setRcounter(rcounter-1)}>Update R Counter</button>
        </div>
    )
}
export default Counter//use of  two states in one component