import React,{useContext} from "react";

import ChildrenCompoments from "./ChildrenCompoments";
import { FamilyContext } from "./FamilyContext";

function Parent() {

    const familyMessage = useContext(FamilyContext);

    console.log(familyMessage);
    

    return (  
        <div className="parent">
            <h2>Parent {familyMessage.familyName}</h2>
            <ChildrenCompoments/>
        </div>
    );
}

export default Parent;