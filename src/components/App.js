import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [click,setclicked]=react.useState(false);
  function handleClick(){
  setclicked(true);
  }
  return (
    <div id="main">
     	<button id="click" onClick={handleClick}>
		click
		</button>
    {
    click &&(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
    }
    
    </div>
  );
}


export default App;
