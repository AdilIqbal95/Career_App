import React from 'react';

const SearchBar = () => {
 
    return (
        <>
        <div className="SearchBar-container">
          <i id="search" class="fa fa-search" aria-hidden="true"></i>
          <input className= "SearchBar" type='text'></input>
        </div>
        <div className="Filter1">
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="Filter2">
          <select name="Animals" id="cars">
            <option value="Lion">Lion</option>
            <option value="Tiger">Tiger</option>
            <option value="Cheetah">Cheetah</option>
            <option value="Elephant">Elephant</option>
          </select>
        </div>
        </>
    )
}

export default SearchBar;