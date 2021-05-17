import React from 'react';
import { SearchBar, Results } from '../../components';

const Search = () => {
 
    return (
        <>
            <div class="row">
              <div><SearchBar /></div>
            </div>
            <div class="row">
              <div>
                <h1> Results</h1>
                <div><Results /></div>
              </div>
            </div>

            
          
        </>
    )
}

export default Search;