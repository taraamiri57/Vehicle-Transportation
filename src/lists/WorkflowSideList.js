import React, { useState } from "react";
import PropTypes from 'prop-types';
import WFStatus from "../Views/WorkFlowStatus";
import { MARGIN_MEDIUM, MARGIN_REGULAR, MARGIN_XX_MEDIUM, MARGIN_XXX_SMALL,
         LABEL_GREY, FONT_LABEL_REGULAR, FONT_HEADER_REGULAR, HEADER_BLACK } from "../utils/Constants";


function Listbar({ localData }) {
  const [data] = useState(localData);

  const styles = {
    app: {
      width: "90%",
      margin: `${MARGIN_MEDIUM}px ${MARGIN_REGULAR}px ${MARGIN_REGULAR}px ${MARGIN_REGULAR}px`,
      textAlign: "left" 
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
      {data ? data.map((item) => {
        return (
          <div style={{ ...styles.item}}>
          <div className="form-group" style={{ marginRight: "1rem", textAlign: "left" }}>
              <div className="d-flex">
                <div>
                  <span style={{ fontSize: "14px", color: `${HEADER_BLACK}`, marginLeft:`${MARGIN_XX_MEDIUM}px` }}><b>Work Flow: {item.location_status}</b></span>
                </div>
                <div className="d-flex justify-content-end" style={{padding:"2px",marginLeft: `${MARGIN_XX_MEDIUM}px`}}>
                  <WFStatus text={item.workflow_status}/>
                </div>
              </div>
              <div className="form-group">
                <span style={{ fontSize: `${FONT_LABEL_REGULAR}`, color: `${LABEL_GREY}`, marginLeft:`${MARGIN_XX_MEDIUM}px`  }}>From:</span><span style={{ fontSize: `${FONT_LABEL_REGULAR}`, marginLeft:`${MARGIN_XXX_SMALL}px`  }}>{item.from}</span>
              </div>
              <div className="form-group">
                <span style={{ fontSize: `${FONT_LABEL_REGULAR}`, color: `${LABEL_GREY}`, marginLeft:`${MARGIN_XX_MEDIUM}px`  }}>To:</span><span style={{ fontSize: `${FONT_LABEL_REGULAR}`, marginLeft:`${MARGIN_XXX_SMALL}px`  }}>{item.to}</span>
              </div>
              <div className="form-group">
                <span style={{ fontSize: `${FONT_LABEL_REGULAR}`, color: `${LABEL_GREY}`,marginLeft:`${MARGIN_XX_MEDIUM}px`  }}>Due Date:</span><span style={{ fontSize: `${FONT_LABEL_REGULAR}`, color: "red", marginLeft:`${MARGIN_XXX_SMALL}px`  }}>{item.due_date}</span>
              </div>
            </div>
          </div>
        );
      }) : (
        <span>Loading...</span>
      )}
    </div>
  </div>
    );
  }

Listbar.propTypes = {
  localData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      location_status: PropTypes.string,
      workflow_status: PropTypes.string,
      from: PropTypes.string,
      to: PropTypes.string,
      customer_address: PropTypes.string,

      due_date: PropTypes.string,
    })
  ).isRequired
};

export default Listbar;