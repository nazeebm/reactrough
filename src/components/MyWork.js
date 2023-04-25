import './component.css'
import { useState } from 'react'

const Work=()=> {
    const[count,SetCount]=useState(0)
    const ClickHandler=()=> {SetCount(count+1);}

return(
    <div>
        
        <h1> {count} </h1>
        <button onClick={ClickHandler}>+</button>
        <h1> {count*2} </h1>
    </div>
)
}

export default Work;