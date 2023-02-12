import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import PropTypes from 'prop-types';

function DropDown({ hint, listItems }) {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: 'white', color: 'black', border: '1px solid lightgrey' }}>
        {hint}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {listItems.map((item) => (
          <Dropdown.Item key={item} href={`#/action-${item}`}>{item}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

DropDown.propTypes = {
  hint: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DropDown;