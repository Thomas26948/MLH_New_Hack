import React from 'react';
import Place from './Place';

//Takes an array of places objects that have attributes location, hours, cost
const PlaceList = (props) => {

    return (
        <div>
            <h2>Locations</h2>
            {
                props.places.map((place, i) => {
                    return (<Place key={i} location={place.location} hours={place.hours} cost={place.cost}/>);
                })
            }
        </div>
    );
}

export default PlaceList