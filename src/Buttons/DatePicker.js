import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function DatepickerComponent({ selectedDate, handleDateChange }) {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Form.Group controlId="doj">
            <Form.Control
              type="date"
              name="doj"
              defaultValue={selectedDate}
              placeholder="Date of Joining"
              onChange={handleDateChange}
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
}

DatepickerComponent.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  handleDateChange: PropTypes.func.isRequired,
};

export default DatepickerComponent;