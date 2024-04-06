import { useState } from "react";

function Counter() {
  const [state, setstate] = useState(0);
  function Decre() {
    if (state >= 1) {
      setstate(state - 1);
    }
  }
  function Incre() {
    setstate(state+1);
    // setstate(state =>state + 1);
    // setstate(state=>state + 1);
    // setstate(state=>state + 1);
  }
  return(
    <>
        <h1 style={{textAlign:'center'}}>Counter App Using UseState Hook</h1>
      <div className="row">
        <button onClick={()=>Decre()}>-</button>
        <span>{state<=9 ? "0"+state : state}</span>
        <button onClick={()=>Incre()}>+</button>
      </div>
    </>
  );
}

export default Counter;
