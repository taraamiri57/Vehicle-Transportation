import React from "react";

import { Search } from "react-bootstrap-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Form } from "react-bootstrap";

import {MARGIN_MEDIUM, MARGIN_REGULAR, MARGIN_XXX_SMALL, MARGIN_X_SMALL, MARGIN_LARG} from "./../Utils/Constants";



const Filterbar = () => {
 
  return (
    <div>
      <h2 className="header active  align-items-left" style={{
        fontSize: 32, color: "black", marginTop: `${MARGIN_MEDIUM}px`, marginLeft: `${MARGIN_REGULAR}px` }}>
        Submissions
      </h2>
      <MDBContainer  style={{marginLeft:`${MARGIN_REGULAR}px`}}>
        <MDBRow>
          <MDBCol className="form-control" style={{ width: "70%", height: "5%", marginRight:`${MARGIN_X_SMALL}px`}}>
            <Form.Text className="text" style={{ margin:`${MARGIN_XXX_SMALL}px`, fontSize: 12 }}>
              <Search style={{ margin: `${MARGIN_XXX_SMALL}px`, color: "lightgrey" }} /> Search...</Form.Text>
          </MDBCol>
          <MDBCol className="form-control" style={{ width: "10%", maxWidth:"20%", height: "5%",  marginLeft: `${MARGIN_MEDIUM}px`, font: 8 }}>
            <Form.Text className="text" style={{ fontSize: 12, color: "black" }}>
              Select Form</Form.Text>
          </MDBCol>
          <MDBCol className="form-control" style={{ width: "10%", maxWidth:"20%", height: "5%",marginLeft: `${MARGIN_MEDIUM}px`, font: 8 }}>
            <Form.Text className="text" style={{ fontSize: 12, color: "black" }}>
              Select Status</Form.Text>
          </MDBCol>
          <MDBCol className="form-control" style={{ width: "10%", maxWidth:"20%", height: "5%",marginLeft: `${MARGIN_MEDIUM}px`, font: 8 }}>
            <Form.Text className="text" style={{ fontSize: 12, color: "black" }}>
              24/12/2020</Form.Text>
          </MDBCol>
        </MDBRow>

      </MDBContainer>

    </div>

  );
}
export default Filterbar;
