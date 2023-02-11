import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navigation/Navbar.js";
import Filterbar from "./filters/Filter.js";
import Listbar from "./lists/WorkflowSideList.js"
import WorkFlowFullList from './lists/WorkflowFullList.js';
import Map from "./maps/Gmap.js"
import { MDBRow, MDBCol } from 'mdbreact';
const localData = require('./data/data.json')


function App() {

  const [activeView, setActiveView] = useState(1);
  const [data, setData] = useState(localData);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // ToggleButton Callback
  const handleViewChange = (value) => {
    setActiveView(value);
  };


  // DatePicker callback
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Search callback
  const handleSearch = event => {
    if(event.target.value!=null){
    setSearchTerm(event.target.value);
    setSearchResults(
      data.filter(item =>
        item.from.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setData(searchResults)
      }
  };

  return (
    <div>
      <Navbar />
      <Filterbar onViewChange={handleViewChange} handleDateChange={handleDateChange} selectedDate={selectedDate} searchTerm={searchTerm} handleSearch={handleSearch}/>
      {activeView === 1 && <MDBRow>
        <MDBCol size="4">
          <Listbar localData={data} />
        </MDBCol>
        <MDBCol size="8">
        <Map localData={data}/>
        </MDBCol>
      </MDBRow>
      }

      {activeView === 2 &&  <MDBCol>
          <WorkFlowFullList submissions={localData} />
        </MDBCol>}
    

    </div>
  );
}


export default App;
