import React from 'react';
import { Sidebar } from '../../layout'
import { Header } from '../../layout'
import { SearchBar } from '../../SearchBar'

const Search = () => {
 
    return (
        <>
            <div className="row">
              <div className="col-sm-3"><Sidebar /></div>
              <div className="col"><Header /></div>
            </div>
            <div className="row">
              <div className="col"><SearchBar /></div>
            </div>
          
        </>
    )
}

export default Search;