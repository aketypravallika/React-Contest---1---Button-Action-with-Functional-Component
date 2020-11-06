import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [isclick,clicked]=useState(false);
  function handleClick(){
  clicked(true);
  }
  return (
    <div id="main">
     	<button id="click" onClick={handleClick}>
		click
		</button>
    {
    isclick ?(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
    }
    
    </div>
  );
}


export default App;
