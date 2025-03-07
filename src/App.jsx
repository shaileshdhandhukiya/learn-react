import "./App.css";

import React, { useEffect, useState } from "react";
import { FamilyContext } from "./components/prop-drilling/FamilyContext";
import UseRef from "./components/UseRef";

import Family from "./components/prop-drilling/Family";

function App() {
  const familyMessage = {
    familyName: "The Smiths",
  };

  return (
    <>
      {/* <FamilyContext.Provider value={familyMessage}> */}
        <UseRef />
      {/* </FamilyContext.Provider> */}
    </>
  );
}

export default App;
