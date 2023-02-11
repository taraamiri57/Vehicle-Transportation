import React from 'react'
import { Form } from 'react-bootstrap';

 function DatepickerComponent(props){



        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="doj">
                            <Form.Control
                                type="date"
                                name="doj"
                                defaultValue={props.selectedDate}
                                placeholder="Date of Joining"
                                onChange={props.handleDateChange} />
                        </Form.Group>
                    </div>
                </div>
            </div>
        );

}

export default DatepickerComponent;