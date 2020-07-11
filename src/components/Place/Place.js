import React from 'react';
import './Place.css';

const Place = (props) => {
    return(
        <div class="location-group">
            <h3 class="location-info">Address: {props.location}</h3>
            <h3 class="location-info">Hours: {props.hours}</h3>
            <h3 class="location-info">Cost: {props.cost}</h3>
        </div>
    );
}

export default Place;
