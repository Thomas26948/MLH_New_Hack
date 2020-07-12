import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {

    return (
        <div>
            <input
                type='text'
                placeholder={props.prevInfo}
                onChange={e => props.submit(e.target.value)}
            />
        </div>
        
    );
}

export default SearchBox