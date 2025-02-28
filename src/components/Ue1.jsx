import React, { useState, useEffect } from "react";

function Ue1() {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(1);

  function increment() {
    setCount(count + factor);
  }

  function decrement() {
    if (count == 0) {
      return;
    }
    setCount(count - factor);
  }

  function incrementFactor() {
    setFactor(factor + 1);
  }

  function decrementFactor() {
    if (count == 0) {
      return;
    }
    setFactor(factor - 1);
  }

  // component mounting and component updating

  //   useEffect(()=>{
  //     console.log("useEffect called",count);
  //     document.title=`Counter ${count}`;
  //   });

  useEffect(() => {
    console.log("useEffect called", count);
    document.title = `Counter ${count}`;
  }, [count]);

  return (
    <div>
      <h1> This is my Counter : {count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>set my factor {factor}</h1>

      <button onClick={incrementFactor}>Increment</button>
      <button onClick={decrementFactor}>Decrement</button>
    </div>
  );
}

export default Ue1;
