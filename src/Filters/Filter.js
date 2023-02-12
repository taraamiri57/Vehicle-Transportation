import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Form, InputGroup } from "react-bootstrap";
import { Search, FileEarmarkArrowDownFill } from "react-bootstrap-icons";
import PropTypes from "prop-types";
import ToggleButtonGroupUncontrolled from "../buttons/TgButton";
import DatepickerComponent from "../buttons/DatePicker";
import DropDown from "../buttons/DropDown";
import { MARGIN_MEDIUM, MARGIN_REGULAR, MARGIN_XXX_SMALL, MARGIN_X_SMALL } from "../utils/Constants";

function Filterbar({ localData, searchTerm, handleSearch, handleDateChange, selectedDate, onViewChange }) {
  const dropDownOptionListItems = ["Option1", "Option2", "Option3", "Option4"];
  const dropDownStatusListItems = ["Low Risk", "Uncompleted", "Unassigned", "Needs Review"];

  const exportData = () => {
    const dataToExport = localData.map(({ id, location_status, workflow_status, from, to, customer_address, due_date}) => [id, location_status, workflow_status, from, to, customer_address, due_date]);
    const header = ['id', 'Task', 'Status', "From", "To", "Customer Address", "Due Date"];
    dataToExport.unshift(header);
    const csv = dataToExport.map(row => row.join(',')).join('\n');
    const file = new Blob([csv], { type: 'text/csv' });
    const fileUrl = URL.createObjectURL(file);

    const link = document.createElement('a');
    link.download = 'GoFleet.csv';
    link.href = fileUrl;
    link.click();
  };

  return (
    <div className="absolute" style={{ marginTop: `${MARGIN_MEDIUM}px`, marginLeft: `${MARGIN_REGULAR}px`, marginRight: `${MARGIN_REGULAR}px` }}>
  <div className="row align-items-center">
    <div className="col-16 col-md-2 mb-2 mb-md-0" style={{ height: "50px" }}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" style={{ backgroundColor: "white" }}>
            <Search style={{ margin: `${MARGIN_X_SMALL}px`, color: "lightgrey" }} />
          </span>
        </div>
        <input type="text" className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon1"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
    <div className="col-6 col-sm-1 mb-2 mb-md-0" style={{ height: "50px", fontSize: "8px",  marginRight:"2%" }}>
      <DropDown hint="Select Form" listItems={dropDownOptionListItems} />
    </div>
    <div className="col-6 col-sm-1 mb-2 mb-md-0" style={{ height: "50px", fontSize: "8px", marginRight:"2%" }}>
      <DropDown hint="Select Status" listItems={dropDownStatusListItems} />
    </div>
    <div className="col-6 col-md-4 mb-5 mb-md-0" style={{ height: "50px", fontSize: "8px", marginRight:"2%" }}>
      <DatepickerComponent handleDateChange={handleDateChange} selectedDate={selectedDate} />
    </div>
    <div className="col-4 col-sm-1 mb-2 mb-md-0" style={{ height: "50px", marginLeft:"10%" }}>
      <ToggleButtonGroupUncontrolled onViewChange={onViewChange} />
    </div>
    <div className="col-4 col-sm-1 mb-6 mb-md-0" style={{ height: "50px", marginLeft: "5px" }}>
      <button onClick={exportData} type="button" className="btn btn-primary border-0" style={{ backgroundColor: "white" }}>
        <FileEarmarkArrowDownFill size={24} style={{ color: "blue" }} />
        <span style={{ fontSize: 14, color: "blue" }}> Export</span>
      </button>
    </div>
  </div>
</div>

  );
}

Filterbar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  selectedDate: PropTypes.string.isRequired,
  onViewChange: PropTypes.func.isRequired
};

export default Filterbar;
