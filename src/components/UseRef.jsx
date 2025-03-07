import React, { useRef } from 'react';

function UseRef() {
    // Create a ref to store a DOM element
    const inputRef = useRef(null);

    // Function to focus the input element
    const focusInput = () => {
        inputRef.current.focus();
    };

    const changeCOlor = () => {
        inputRef.current.style.color = "red";
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
            <button onClick={changeCOlor}>Change Color</button>
        </div>
    );
}

export default UseRef;
