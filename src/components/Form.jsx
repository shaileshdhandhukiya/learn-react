import React,{useState} from "react";

function Form() {


    const [input, setInput] = useState('');

    const handleChanges = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    return ( 
        <div>
            <form>
                <input onChange={handleChanges} type="text" />
            </form>
        </div>


     );
}

export default Form;