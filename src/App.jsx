import './App.css'

import React,{ useEffect, useState } from 'react'
import Fruits from './components/Fruits';
import Message from './components/Message';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {/* <Animal /> */}
      {/* {loading ? <Loader /> : <Fruits />} */}
      <Message />
    </>
  )
}

export default App
