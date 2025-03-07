import React from "react";

import ChildrenCompoments from "./ChildrenCompoments";

function Parent({message}) {
    console.log("Parent message = >",message);
    return (  
        <div className="parent">
            <h2>Parent</h2>
            <ChildrenCompoments message={message}/>
        </div>
    );
}

export default Parent;