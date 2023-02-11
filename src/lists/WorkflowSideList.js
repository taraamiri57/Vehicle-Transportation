import React, { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Form } from "react-bootstrap";
import WFStatus from "../Views/WorkFlowStatus.js";
import {MARGIN_MEDIUM, MARGIN_REGULAR,MARGIN_XX_MEDIUM,
  LABEL_GREY,
  FONT_LABEL_REGULAR,
  FONT_HEADER_REGULAR,
  HEADER_BLACK,
  MARGIN_XXX_SMALL} from "../utils/Constants";


function Listbar({localData}) {

  const [data]= useState(localData);

  const styles = {
    app: {
      width: "90%",
      margin: `${MARGIN_MEDIUM}px ${MARGIN_REGULAR}px ${MARGIN_REGULAR}px ${MARGIN_REGULAR}px`,
        
    },
    
    scroller: {
      margin: "0 0",
      height: "500px",
      width: "100%",
      overflow: "auto"
    },
    
    item: {
      padding: "4px",
      border: '1px solid #B8B9BC',
      marginBottom: "8px"
    }
  }

  return (
    <div style={{ ...styles.app, textAlign: "left" }}>
    <div style={styles.scroller}>
      {data ? data.map((item, index) => {
        return (
          <div style={{ ...styles.item}}>
          <div className="form-group" style={{ marginRight: "1rem", textAlign: "left" }}>
              <div className="d-flex">
                <div>
                  <label style={{ fontSize: `${FONT_HEADER_REGULAR}`, color: `${HEADER_BLACK}`, marginLeft:`${MARGIN_XX_MEDIUM}px` }}><b>Work Flow: {item.location_status}</b></label>
                </div>
                <div className="lg-auto" style={{marginRight:`${MARGIN_XX_MEDIUM}px` }}>
                  <WFStatus text={item.workflow_status} />
                </div>
              </div>
              <div className="form-group">
                <label style={{ fontSize: `${FONT_LABEL_REGULAR}`, color: `${LABEL_GREY}`, marginLeft:`${MARGIN_XX_MEDIUM}px`  }}>From:</label><label style={{ fontSize: `${FONT_LABEL_REGULAR}`, marginLeft:`${MARGIN_XXX_SMALL}px`  }}>{item.from}</label>
              </div>
              <div className="form-group">
                <label style={{ fontSize: `${FONT_LABEL_REGULAR}`, color: `${LABEL_GREY}`, marginLeft:`${MARGIN_XX_MEDIUM}px`  }}>To:</label><label style={{ fontSize: `${FONT_LABEL_REGULAR}`, marginLeft:`${MARGIN_XXX_SMALL}px`  }}>{item.to}</label>
              </div>
              <div className="form-group">
                <label style={{ fontSize: `${FONT_LABEL_REGULAR}`, color: `${LABEL_GREY}`,marginLeft:`${MARGIN_XX_MEDIUM}px`  }}>Due Date:</label><label style={{ fontSize: `${FONT_LABEL_REGULAR}`, color: "red", marginLeft:`${MARGIN_XXX_SMALL}px`  }}>{item.due_date}</label>
              </div>
            </div>
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