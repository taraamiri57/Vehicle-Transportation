import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import Filterbar from "./Filters/Filter.js";
import Listbar from "./Lists/List.js"


function App() {
  return (
    <div>
      <Navbar />
      <Filterbar />
      <Listbar />
     
      
    </div>
    
  );
}


export default App;
