import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import Filterbar from "./Filters/Filter.js";
import Listbar from "./Lists/List.js"


function App() {
  return (
    <div>
      <Navbar />
      <h2 className="header active  align-items-center" style={{fontSize: 32, color:"black", marginLeft:"2rem", marginTop:"2rem"}}>
      Submissions
       {/*<a className="d-flex align-items-center" href="#"  style={{fontSize: 32, color:"black",marginLeft:"4rem"}}>   </a>*/}
      </h2>
      <Filterbar />
     
      
    </div>
    
  );
}


export default App;
