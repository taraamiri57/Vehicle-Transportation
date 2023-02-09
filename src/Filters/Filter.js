import React from "react";

import { Search } from "react-bootstrap-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


const Filterbar = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol  className= "form-control border-secondary py-2 " style={{width: 50}} >
        <Search style={{ marginRight: "0.1rem"}}/> Search...
        </MDBCol>
        <MDBCol className= "form-control border-secondary py-2" style={{width: "10%",marginRight:"2rem", marginLeft:"1rem"}}>
          Select Form
        </MDBCol>
        <MDBCol size='sm'className= "form-control border-secondary py-2" style={{width: "20%",marginRight:"2rem", marginLeft:"1rem"}}>
          Select Status
        </MDBCol>
        <MDBCol size='sm'className= "form-control border-secondary py-2" style={{width: "20%",marginRight:"2rem", marginLeft:"1rem"}}>
          24/12/2020
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Filterbar;