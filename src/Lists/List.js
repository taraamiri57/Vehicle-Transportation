import React, { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Form } from "react-bootstrap";
import {MARGIN_MEDIUM, MARGIN_REGULAR,
  LABEL_GREY,
  FONT_LABEL_REGULAR,
  FONT_HEADER_REGULAR,
  HEADER_BLACK} from "./../Utils/Constants";


var localData = require('./../Data/data.json')

function Listbar() {

  const [data]= useState(localData);

  const styles = {
    app: {
      width: "14%",
      margin: `${MARGIN_MEDIUM}px ${MARGIN_REGULAR}px`,    
    },
    
    scroller: {
      margin: "0 0",
      height: "400px",
      width: "200%",
      overflow: "auto"
    },
    
    item: {
      padding: "4px"
    }
  }

  return (
    <div style={{...styles.app, textAlign:"left"}}>
        <div  style={styles.scroller}>
          {data ?  data.map((item, index)=> {
            return (
              <div  style={styles.item}>
                <MDBCol className="form-control" style={{marginRight:"1rem", textAlign:"left"}}>
                <label style={{fontSize:`${FONT_HEADER_REGULAR}`, color:`${HEADER_BLACK}`}}><b>Work Flow: { item.location_status}</b></label>
                <br/>
                <label style={{fontSize:`${FONT_LABEL_REGULAR}`,color:`${LABEL_GREY}`}}>From:</label><label style={{fontSize:`${FONT_LABEL_REGULAR}`}}>{item.from}</label><br/>
                <label style={{fontSize:`${FONT_LABEL_REGULAR}`,color:`${LABEL_GREY}`}}>To:</label><label style={{fontSize:`${FONT_LABEL_REGULAR}`}}>{item.to}</label><br/>
                <label style={{fontSize:`${FONT_LABEL_REGULAR}`,color:`${LABEL_GREY}`}}>Due Date:</label><label style={{fontSize:`${FONT_LABEL_REGULAR}`}}>{item.due_date}</label><br/>
                </MDBCol>
              </div>
            );
          }) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }


export default Listbar;