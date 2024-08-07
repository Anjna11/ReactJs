import React, { useState } from "react";
import './App.css';

function App() {

  const [result, setresult] = useState("");

  const handleClick = (e) => {
    setresult(result.concat(e.target.name))
  }

  const clear = () => {
    setresult("");
  }

  const backspace = () => {
    setresult(result.slice(0, -1))
  }

  const calculate = () => {
    try{
      setresult(eval(result).toString());
    }catch(err){
      setresult("Error")
    }
  }

  return (
    <div>
      <div className='container'>
        <input type="text" value={result}></input>

        <div className="keypad">
          <button onClick={clear} id="clear">AC</button>
          <button onClick={backspace} id="backspace">C</button>
          <button className='highlight' name="%" onClick={handleClick}>&#37;</button>
          <button className='highlight' name="/" onClick={handleClick}>&divide;</button>
          <button className='noColor' name="7" onClick={handleClick}>7</button>
          <button className='noColor' name="8" onClick={handleClick}>8</button>
          <button className='noColor' name="9" onClick={handleClick}>9</button>
          <button className='highlight' name="*" onClick={handleClick}>&times;</button>
          <button className='noColor' name="4" onClick={handleClick}>4</button>
          <button className='noColor' name="5" onClick={handleClick}>5</button>
          <button className='noColor' name="6" onClick={handleClick}>6</button>
          <button className='highlight' name="-" onClick={handleClick}>&ndash;</button>
          <button className='noColor' name="1" onClick={handleClick}>1</button>
          <button className='noColor' name="2" onClick={handleClick}>2</button>
          <button className='noColor' name="3" onClick={handleClick}>3</button>
          <button className='highlight' name="+" onClick={handleClick}>+</button>
          <button className='noColor' name="00" onClick={handleClick}>00</button>
          <button className='noColor' name="0" onClick={handleClick}>0</button>
          <button className='highlight' name="." onClick={handleClick}>.</button>
          <button className='highlight' onClick={calculate} id="result">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
