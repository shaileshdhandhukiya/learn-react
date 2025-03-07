import Parent from "./Parent";

function Family({message}) {

    console.log(message);
    
    return (  
        <div className="family">
            <h1>Family</h1>
            <Parent message={message} />
        </div>
    );
}

export default Family;