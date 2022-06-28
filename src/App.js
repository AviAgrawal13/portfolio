import React from 'react';
import Typist from "react-typist"; 
import "react-typist/dist/Typist.css"

function App() {
  return (
    <div id="intro">
      <Typist>
          <span class="text">hi, <span class="name">Avi</span> here.</span>
      </Typist>
    </div>
  );
}

export default App;
