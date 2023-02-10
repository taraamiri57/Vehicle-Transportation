import React from 'react';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function ToggleButtonGroupUncontrolled() {
    return (
        <>
            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                    Map
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                    List
                </ToggleButton>

            </ToggleButtonGroup>

        </>
    );
}

export default ToggleButtonGroupUncontrolled;