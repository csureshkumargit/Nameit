import React from 'react';
import './SearchBox.css';
const SearchBox = ({ OnInputChange }) => {
    return (
        <div className='SearchBox-Container'>
            <input onChange={(event) => OnInputChange(event.target.value)} placeholder="Type Keywords Here" className='searchtext'></input>
        </div>
    );

};
export default SearchBox;