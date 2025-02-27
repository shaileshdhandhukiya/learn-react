import React from 'react';

function Message() {

    function handleClick() {
        // alert('Hello!');
        console.log("Hello!");
        
    }

    return (  
        <div>
            <button onClick={handleClick}>Click Me to say hello</button>
        </div>
    );
}

export default Message;