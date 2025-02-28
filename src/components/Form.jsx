import React,{useState} from "react";

function Form() {


    const [name, setName] = useState({firstName:'', lastName:''});

    // const handleChanges = (e) => {
    //     setInput(e.target.value);
    //     console.log(e.target.value);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
    }

    return ( 
        <div>
            <h1>{name.firstName} - {name.lastName}</h1>
            <form>
                <label htmlFor="first name">First Name</label>
                <input onChange={(e)=>setName({...name, firstName:e.target.value})} type="text" value={name.firstName}/>
                <br />
                <br />
                <label htmlFor="last name">Last Name</label>
                <input onChange={(e)=>setName({...name, lastName: e.target.value})} type="text" value={name.lastName}/>

                <br />
                <br />
                <button onClick={handleSubmit}>Submit</button>

            </form>
        </div>


     );
}

export default Form;