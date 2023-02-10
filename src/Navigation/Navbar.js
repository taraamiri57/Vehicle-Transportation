import React from "react";
import { ListUl } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import { ClockHistory } from "react-bootstrap-icons";
import { FileBarGraph } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { BoxArrowRight  } from "react-bootstrap-icons";
import {MARGIN_MEDIUM, MARGIN_REGULAR, MARGIN_XXX_SMALL,MARGIN_X_MEDIUM, WHITE, MARGIN_X_SMALL, MARGIN_LARG, MARGIN_SMALL} from "./../Utils/Constants";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
  <a className="navbar-brand align-items-center " href="#" style={{fontSize: 32, color:`${WHITE}`, marginLeft:`${MARGIN_MEDIUM}px`}}>ZenduForms</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-targetn="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown" >
    <ul className="navbar-nav align-items-center">
      <li className="nav-item active mx-2">
        <a className="nav-link d-flex align-items-center" href="#"  style={{fontSize: 14, color:`${WHITE}`, marginTop: `${MARGIN_XXX_SMALL}` ,marginLeft:"175px"}}>  <ListUl style={{ marginRight: `${MARGIN_X_SMALL}`,marginTop: `${MARGIN_X_SMALL}`, color:`${WHITE}` }}/> Forms </a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link d-flex align-items-center" href="#" style={{fontSize: 14,  color:`${WHITE}`, marginTop: `${MARGIN_XXX_SMALL}`}}>  <Person style={{ marginRight: `${MARGIN_X_SMALL}`,marginTop: `${MARGIN_X_SMALL}`, color:`${WHITE}` }}/> Customers</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link d-flex align-items-center" href="#" style={{fontSize: 14, color:`${WHITE}`, marginTop: `${MARGIN_XXX_SMALL}`}}> < ClockHistory style={{ marginRight: `${MARGIN_X_SMALL}`,marginTop: `${MARGIN_X_SMALL}`, color:`${WHITE}` }} /> Submissions </a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link d-flex align-items-center" href="#" style={{fontSize: 14,color:`${WHITE}`, marginTop: `${MARGIN_XXX_SMALL}`}}>  <ClockHistory style={{marginRight: `${MARGIN_X_SMALL}`,marginTop: `${MARGIN_X_SMALL}`, color:`${WHITE}` }}/>History</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link d-flex align-items-center" href="#" style={{fontSize: 14, color:`${WHITE}`, marginTop: `${MARGIN_XXX_SMALL}`}}>  <FileBarGraph style={{ marginRight: `${MARGIN_X_SMALL}`,marginTop: `${MARGIN_X_SMALL}`, color:`${WHITE}` }}/>Reports</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link d-flex align-items-center" href="#" style={{fontSize: 14, color:`${WHITE}`, marginTop: `${MARGIN_XXX_SMALL}`}}>  <FileBarGraph style={{ marginRight: `${MARGIN_X_SMALL}`,marginTop: `${MARGIN_X_SMALL}`, color:`${WHITE}` }}/>Workflow</a>
      </li>
    </ul>
  </div>
  <a className="d-flex align-items-center" href="#">  <BellFill size={14} style={{marginLeft: "125px",color:`${WHITE}`}}/></a>
  <a className="d-flex align-items-center" href="#">  <BoxArrowRight size={14} style={{marginLeft:"22px" ,marginRight: `${MARGIN_X_MEDIUM}`, color:`${WHITE}`}}/></a>
</nav>
    )
   
} 


export default Navbar
