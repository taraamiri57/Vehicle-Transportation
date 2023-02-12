import React from "react";
import { ListUl, Person, ClockHistory, FileBarGraph, BellFill, BoxArrowRight} from "react-bootstrap-icons";
import {MARGIN_MEDIUM, MARGIN_XXX_SMALL,MARGIN_X_MEDIUM, WHITE, MARGIN_X_SMALL} from "../utils/Constants";


function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
        <a className="navbar-brand align-items-center " href="https://www.google.com/" style={{fontSize: 32, color:`${WHITE}`, marginLeft:`${MARGIN_MEDIUM}px`}}>ZenduForms</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown" >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item active mx-2">
              <a className="nav-link d-flex align-items-center" href="https://www.google.com/"  style={{fontSize: 14, color:`${WHITE}`, marginTop: `${MARGIN_XXX_SMALL}`}}>  <ListUl style={{ marginRight: `${MARGIN_X_SMALL}`,marginTop: `${MARGIN_X_SMALL}`, color:`${WHITE}` }}/> Forms </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link d-flex align-items-center" href="https://www.google.com/" style={{fontSize: 14,  color:`${WHITE}`, marginTop: `${MARGIN_XXX_SMALL}`}}>  <Person style={{ marginRight: `${MARGIN_X_SMALL}`,marginTop: `${MARGIN_X_SMALL}`, color:`${WHITE}` }}/> Customers</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link d-flex align-items-center" href="https://www.google.com/" style={{fontSize: 14, color:`${WHITE}`, marginTop: `${MARGIN_XXX_SMALL}`}}> <ClockHistory style={{ marginRight: `${MARGIN_X_SMALL}`,marginTop: `${MARGIN_X_SMALL}`, color:`${WHITE}` }} /> Submissions </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link d-flex align-items-center" href="https://www.google.com/" style={{fontSize: 14,color:`${WHITE}`, marginTop: `${MARGIN_XXX_SMALL}`}}>  <ClockHistory style={{marginRight: `${MARGIN_X_SMALL}`,marginTop: `${MARGIN_X_SMALL}`, color:`${WHITE}` }}/>History</a>
            </li>
            <li className="nav-item mx-2">
      <a className="nav-link d-flex align-items-center" href="https://www.google.com/" style={{ fontSize: 14, color: `${WHITE}` }}>
        <FileBarGraph style={{ marginRight: `${MARGIN_X_SMALL}`, color: `${WHITE}` }} /> 
        Reports
      </a>
    </li>
    <li className="nav-item mx-2">
      <a className="nav-link d-flex align-items-center" href="https://www.google.com/" style={{ fontSize: 14, color: `${WHITE}` }}>
        <FileBarGraph style={{ marginRight: `${MARGIN_X_SMALL}`, color: `${WHITE}` }} /> Workflow
      </a>
    </li>
  </ul>
  </div>
  <div className="d-flex align-items-end">
    <a className="nav-link" href="https://www.google.com/">
      <BellFill size={14} style={{marginRight: `${MARGIN_X_MEDIUM}px`, color: `${WHITE}` }} />
    </a>
    <a className="d-flex nav-link" href="https://www.google.com/">
      <BoxArrowRight size={14} style={{ marginRight: `${MARGIN_X_MEDIUM}px`, color: `${WHITE}` }} />
    </a>
  </div>
</nav>
    );
}

export default Navbar