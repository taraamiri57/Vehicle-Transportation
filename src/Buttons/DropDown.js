import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';

function DropDown({hint, listItems}) {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "white", color: 'black', border: "1px solid lightgrey" }}>
        {hint}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {listItems.map((item, index) => (
          <Dropdown.Item key={index} href={`#/action-${index + 1}`}>{item}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}


export default DropDown;
