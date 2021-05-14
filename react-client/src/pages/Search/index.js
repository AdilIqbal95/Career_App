import React from 'react';
import { SearchBar } from '../../components/'

const Search = () => {
 
    return (
        <>
            <div className="row">
              <div className="col"><SearchBar /></div>
            </div>
            <div className="row">
              <div className="col">
                <h1> Results</h1>
                <br></br>
              </div>
            </div>
            
          
        </>
    )
}

export default Search;