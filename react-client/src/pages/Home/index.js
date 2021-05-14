import React from 'react';
import { Sidebar } from '../../layout'
import { Header } from '../../layout'

const Home = () => {
 
    return (
        <>
            <div className="row" id="homepage">
            <div className="col-sm-3"><Sidebar /></div>
            <div className="col"><Header /></div>
            </div>
          
        </>
    )
}

export default Home;