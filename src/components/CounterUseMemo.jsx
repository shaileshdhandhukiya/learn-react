
// Example of useMemo hook to memoize expensive calculation
import { useMemo, useState } from 'react';

function CounterUseMemo() {
  const [number, setNumber] = useState(0);
  
  // Memoize the result of expensive calculation
  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]); // Only recalculate when number changes

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>Number: {number}</p>
      <p>Square: {squaredNumber}</p>
    </div>
  );
}

export default CounterUseMemo;