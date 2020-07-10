import React from 'react';
import './Place.css';

const Place = (props) => {
    return(
        <div>
            <h3>Address: {props.location}</h3>
            <h3>Hours: {props.hours}</h3>
            <h3>Cost: {props.cost}</h3>
        </div>
    );
}

export default Place;
