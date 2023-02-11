import React from "react";

import { Search } from "react-bootstrap-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Form, InputGroup } from "react-bootstrap";
import { FileEarmarkArrowDownFill } from "react-bootstrap-icons";
import ToggleButtonGroupUncontrolled from "../buttons/TgButton";
import DatepickerComponent from "../buttons/DatePicker";
import DropDown from "../buttons/DropDown";

import { MARGIN_MEDIUM, MARGIN_REGULAR, MARGIN_XXX_SMALL, MARGIN_X_SMALL, MARGIN_LARG, MARGIN_SMALL } from "../utils/Constants";



const Filterbar = (props) => {
  const dropDownOptionListItems = ["Option1", "Option2","Option3","Option4"];
  const dropDownStatusListItems = ["Low Risk", "Uncompleted", "Unassigned","Needs Review"];
  return (
    <div style={{marginTop: `${MARGIN_MEDIUM}px`, marginLeft: `${MARGIN_REGULAR}px`}}>
    <h2 className="header active align-items-left" style={{fontSize: 32, color: "black"}}>
      Submissions
    </h2>
      <MDBRow>
        <MDBCol size="3" style={{maxWidth: "40%", height: "5%", marginRight: `${MARGIN_X_SMALL}px` }}>
          <InputGroup style={{ justifyContent: "flex-start" }}>
            <InputGroup.Text style={{ backgroundColor: "white" }}>
              <Search style={{ margin: `${MARGIN_XXX_SMALL}px`, color: "lightgrey" }} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="basic-addon1"
              type="text"
              value={props.searchTerm}
              onChange={props.handleSearch}
            />
          </InputGroup>
          </MDBCol>
          <MDBCol  style={{ maxWidth: "6%", height: "5%", marginLeft: `${MARGIN_MEDIUM}px`,marginRight: `${MARGIN_MEDIUM}px`, font: 8 }}>
          <DropDown hint="Select Form" listItems={dropDownOptionListItems}/>
          </MDBCol>
          <MDBCol style={{ maxWidth: "6%", height: "5%", marginLeft: `${MARGIN_MEDIUM}px`,marginRight: `${MARGIN_MEDIUM}px`, font: 8 }}>
            <DropDown hint="Select Status" listItems={dropDownStatusListItems} />
          </MDBCol>
          <MDBCol style={{ width: "25%",  marginLeft: `${MARGIN_MEDIUM}px`, font: 8 }}>
            <DatepickerComponent  handleDateChange={props.handleDateChange} selectedDate={props.selectedDate} />
          </MDBCol>
          <MDBCol style={{ width: "5%", maxWidth: "10%" }} >
            <ToggleButtonGroupUncontrolled onViewChange={props.onViewChange} />

          </MDBCol>
          <MDBCol style={{ width:"5%",maxWidth: "10%",marginTop:`${MARGIN_X_SMALL}px`, marginRight: "1%" }}>
            <FileEarmarkArrowDownFill size={24} style={{ color: "blue" }} /><span style={{ fontSize: 14, color: "blue" }}> Export</span>
          </MDBCol>
        </MDBRow>
  </div>
  
  );
}
export default Filterbar;
