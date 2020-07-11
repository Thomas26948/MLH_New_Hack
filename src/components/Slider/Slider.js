import React from 'react';
import './Slider.css';

const Slider = (props) => {
    return (
        <div>
            <span>1</span>
                <input 
                    type="range" 
                    min="1"
                    max="5"
                    onChange={e => props.submit(e.target.value)}
                />
            <span>5</span>
        </div>

    );
}

export default Slider