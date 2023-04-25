import './component.css'
import Timer from './Timer';
import Work from './MyWork';

const Components=()=>
{
return(
    <div className='container'>
    <div className="main">Model Work here:
        <Timer/>
    </div>
    <div className="main">Your work here:
        <Work/>
    </div>
    </div>
)
}

export default Components;