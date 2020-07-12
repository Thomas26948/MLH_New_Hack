import React from 'react';
import './Slider.css';

const Slider = (props) => {
    return (
        <div>
            <span>1 (affordable)</span>
                <input 
                    type="range" 
                    min="1"
                    defaultValue={props.prevInfo}
                    max="5"
                    onChange={e => props.submit(e.target.value)}
                />
            <span>5 (expensive)</span>
        </div>

    );
}

export default Slider