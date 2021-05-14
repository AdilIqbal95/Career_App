import React from 'react';

const SearchBar = () => {
 
    return (
        <>
        <div className="SearchBar-container">
          <i id="search" class="fa fa-search" aria-hidden="true"></i>
          <input className= "SearchBar" type='text'></input>
        </div>
        </>
    )
}

export default SearchBar;