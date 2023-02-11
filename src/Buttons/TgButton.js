import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useState } from 'react';

function ToggleButtonGroupUncontrolled({ onViewChange }) {
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (value) => {
        setActiveButton(value);
        onViewChange(value);
    };

    return (
        <div>
        <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            <ToggleButton 
                id="tbg-check-1" 
                value={1} 
                onClick={() => handleClick(1)}
                style={activeButton === 1 ? {backgroundColor: "blue"} : {backgroundColor: "white", color:"black"}}
            >
                Map
            </ToggleButton>
            <ToggleButton 
                id="tbg-check-2" 
                value={2} 
                onClick={() => handleClick(2)}
                style={activeButton === 2 ? {backgroundColor: "blue"} : {backgroundColor: "white", color:"black"}}
            >
                List
            </ToggleButton>

        </ToggleButtonGroup>
        </div>
    );
}

export default ToggleButtonGroupUncontrolled;
