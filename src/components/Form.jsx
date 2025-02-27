import React,{useState} from "react";

function Form() {


    const [input, setInput] = useState('');

    // const handleChanges = (e) => {
    //     setInput(e.target.value);
    //     console.log(e.target.value);
    // }

    return ( 
        <div>
            <form>
                <input onChange={(e)=>setInput(e.target.value)} type="text" value={input}/>
                <h1>{input}</h1>
            </form>
        </div>


     );
}

export default Form;