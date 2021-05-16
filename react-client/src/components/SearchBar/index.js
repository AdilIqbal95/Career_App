import React from 'react';

const SearchBar = () => {
    
    return (
        <>
        <div id="SearchBar-container">
          <i id="search" class="fa fa-search" aria-hidden="true"></i>
          <input className= "SearchBar" type='text'></input>
        </div>
        <div class="row">
          <div class="col" id="Filter1">
            <select name="Filter_1" id="Filter_1">
              <option value="All">All</option>
              <option value="Jobs">Jobs</option>
              <option value="Companies">Companies</option>
              <option value="Users">Users</option>
            </select>
          </div>
          <div class="col" id="Filter2">
            <select name="Filter_2" id="Filter_2">
              <option value="Recent">Recent</option>
              <option value="Popular">Popular</option>
            </select>
          </div>
        </div>
        </>
    )
}

export default SearchBar;