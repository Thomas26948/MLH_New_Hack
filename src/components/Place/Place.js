import React from 'react';
import './Place.css';

const Place = (props) => {
    return(
        <div>
            <h2>Address: {props.location}</h2>
            <h2>Hours: {props.hours}</h2>
            <h2>Cost: {props.cost}</h2>
        </div>
    );
}

export default Place;
