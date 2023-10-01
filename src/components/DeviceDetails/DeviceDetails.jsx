import React from 'react';

const DeviceDetails = (props) => {
    return (
        <div>
            <p>Information about my device : </p>
            <small>Price of this Device : {props.price}</small>
        </div>
    );
};

export default DeviceDetails;