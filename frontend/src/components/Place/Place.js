import React from 'react';
import './Place.css';

const Place = (props) => {
    return(
        <div className="location-group">
            <h3 className="location-info">Address: {props.location}</h3>
            <h3 className="location-info">Hours: {props.hours}</h3>
            <h3 className="location-info">Cost: {props.cost}</h3>
        </div>
    );
}

export default Place;
