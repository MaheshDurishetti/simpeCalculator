import './App.css'
import App from './App.js'
function Keyboard({handle,operate,clear}){
    return (<div>
        <div>
<button className="btn" onClick={()=>{handle('9')}}>9</button>
<button className="btn" onClick={()=>{handle('8')}}>8</button>
<button className="btn" onClick={()=>{handle('7')}}>7</button>
<button className="operator" onClick={()=>{handle('-')}}>-</button>
</div>
<div>
<button className="btn"onClick={()=>{handle('6')}} >6</button>
<button className="btn" onClick={()=>{handle('5')}}>5</button>
<button className="btn" onClick={()=>{handle('4')}}>4</button>
<button className="operator" onClick={()=>{handle('/')}}>/</button>
</div>
<div>
<button className="btn" onClick={()=>{handle('3')}} >3</button>
<button className="btn" onClick={()=>{handle('2')}}>2</button>
<button className="btn" onClick={()=>{handle('1')}}>1</button>
<button className="operator" onClick={()=>{handle('*')}}>*</button>
</div>
<div>
<button className="btn" onClick={()=>{handle('0')}}>0</button>
<button className="btn" onClick={()=>{operate('=')}}>=</button>
<button className="btn" onClick={()=>{clear('c')}}>c</button>
<button className="operator" onClick={()=>{handle('+')}}>+</button>
</div>
    </div>)
}
export default Keyboard