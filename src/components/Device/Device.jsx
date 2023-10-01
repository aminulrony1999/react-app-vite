import React from 'react';
import './Device.css';
import DeviceDetails from '../DeviceDetails/DeviceDetails';
const Device = (props) => {
    const {name,price} = props;
    return (
        <div>
            <h3>My device is {name}</h3>
            <DeviceDetails price={price}></DeviceDetails>
        </div>
    );
};

export default Device;