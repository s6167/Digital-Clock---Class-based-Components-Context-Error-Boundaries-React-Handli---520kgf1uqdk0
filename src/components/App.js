import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
  const[date, setDate]=  useState();

  useEffect(()=>{
    const id = setInterval(()=>{setDate(new Date().toLocaleString())}, 1000)
    return ()=>{
      clearInterval(id);
    }
  }, [])

  return (
    <div id="main">
      <div className="date-time">{date}</div>
    </div>
  )
}


export default App;
