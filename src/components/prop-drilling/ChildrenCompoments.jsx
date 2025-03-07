import React from "react";
import GrandSon from "./GrandSon";
import GrandDoughter from "./GrandDoughter";

function ChildrenCompoments({message}) {

  console.log("ChildrenCompoments message = >", message);
  
  return (
    <div>
      <h2>Child - {message.familyName}</h2>
      <GrandSon message={message} />
      <GrandDoughter message={message}/>
    </div>
  );
}

export default ChildrenCompoments;
