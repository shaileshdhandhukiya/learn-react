import "./App.css";

import React, { useEffect, useState } from "react";

import Family from "./components/prop-drilling/Family";

function App() {

  const familyMessage = {
    familyName: "The Smiths",
  };

  return (
    <>
      <Family message={familyMessage} />
    </>
  );
}

export default App;
