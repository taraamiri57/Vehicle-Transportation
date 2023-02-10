import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import Filterbar from "./Filters/Filter.js";
import Listbar from "./Lists/List.js"
import Map from "./Maps/Gmap.js"
import { MDBRow, MDBCol } from 'mdbreact';


function App() {
  return (
    <div>
      <Navbar />
      <Filterbar />
      <MDBRow>
        <MDBCol>
          <Listbar />
        </MDBCol>
        <MDBCol>
          <Map />
        </MDBCol>
      </MDBRow>
    </div>
  );
}


export default App;
