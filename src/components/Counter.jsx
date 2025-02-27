import React,{useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);
    const [factor, setFactor] = useState(1);

    function increment(){
        setCount(count+ factor);
    }
    function decrement(){
        if(count==0){
            return;
        }
        setCount(count-factor);
    }
    
    function incrementFactor(){
        setFactor(factor+1);
    }
    function decrementFactor(){
        if(count==0){
            return;
        }
        setFactor(factor-1);
    }

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

export default Counter;