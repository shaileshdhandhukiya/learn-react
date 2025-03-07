import "./App.css";

import React, { useEffect, useState } from "react";
import { FamilyContext } from "./components/prop-drilling/FamilyContext";
import CounterUseMemo from "./components/CounterUseMemo";

import Family from "./components/prop-drilling/Family";

function App() {
  const familyMessage = {
    familyName: "The Smiths",
  };

  return (
    <>
      {/* <FamilyContext.Provider value={familyMessage}> */}
        <CounterUseMemo />
      {/* </FamilyContext.Provider> */}
    </>
  );
}

export default App;
