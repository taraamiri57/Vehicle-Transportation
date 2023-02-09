import React from "react";
import { ListUl } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import { ClockHistory } from "react-bootstrap-icons";
import { FileBarGraph } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { BoxArrowRight  } from "react-bootstrap-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-primary" >
  <a className="navbar-brand align-items-center " href="#" style={{fontSize: 32, color:"white", marginLeft:"2rem"}}>ZenduForms</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-targetn="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown" >
    <ul className="navbar-nav align-items-center">
      <li className="nav-item active mx-2">
        <a className="nav-link d-flex align-items-center" href="#"  style={{fontSize: 14, color:"white",marginLeft:"4rem"}}>  <ListUl style={{ marginRight: "0.1rem", color:"white" }}/> Forms </a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link d-flex align-items-center" href="#" style={{fontSize: 14, color:"white"}}>  <Person style={{ marginRight: "0.1rem", color:"white" }}/> Customers</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link d-flex align-items-center" href="#" style={{fontSize: 14, color:"white"}}> < ClockHistory style={{ marginRight: "0.1rem", color:"white" }} /> Submissions </a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link d-flex align-items-center" href="#" style={{fontSize: 14, color:"white"}}>  <ClockHistory style={{ marginRight: "0.1rem", color:"white" }}/>History</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link d-flex align-items-center" href="#" style={{fontSize: 14, color:"white"}}>  <FileBarGraph style={{ marginRight: "0.1rem", color:"white" }}/>Reports</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link d-flex align-items-center" href="#" style={{fontSize: 14, color:"white"}}>  <FileBarGraph style={{ marginRight: "0.1rem", color:"white" }}/>Workflow</a>
      </li>
    </ul>
  </div>
  <a className="d-flex align-items-center" href="#">  <BellFill size={14} style={{ marginRight: "2.1rem", color:"white" }}/></a>
  <a className="d-flex align-items-center" href="#">  <BoxArrowRight size={14} style={{ marginRight: "2rem", color:"white" }}/></a>
</nav>
    )
   
} 


export default Navbar
