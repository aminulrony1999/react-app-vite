import React from 'react';
import './Device.css';
const Device = (props) => {
    const {name,price} = props;
    return (
        <div>
            <h3>My device is {name}</h3>
            <small>Price is : {price}</small>
        </div>
    );
};

export default Device;