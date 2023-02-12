import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navigation/Navbar";
import Filterbar from "./filters/Filter";
import Listbar from "./lists/WorkflowSideList"
import WorkFlowFullList from './lists/WorkflowFullList';
import Map from "./maps/Gmap"

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


  // DatePicker callback (TBC)
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Search callback (To be completed)
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
      <Filterbar localData= {data} onViewChange={handleViewChange} handleDateChange={handleDateChange} selectedDate={selectedDate} searchTerm={searchTerm} handleSearch={handleSearch} />
      {activeView === 1 && 
        <div className="d-flex">
          <div className="col-md-4 p-0">
            <Listbar localData={data} />
          </div>
          <div className="col-md-8 p-0">
            <Map localData={data} />
          </div>
        </div>
      }
    
      {activeView === 2 &&
        <div className="d-flex">
          <div className="col-md-12 p-0">
            <WorkFlowFullList submissions={localData} />
          </div>
        </div>
      }
    </div>
  );
}


export default App;
