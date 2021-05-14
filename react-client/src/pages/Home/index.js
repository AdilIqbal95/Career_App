import React from 'react';
import { Sidebar } from '../../layout'
import { Header } from '../../layout'
import { MyJobs } from '../index'
import { Switch, Route } from 'react-router-dom';
import * as Pages from '../index';

const Home = () => {

    return (
        <>
            <div className="row" id="homepage">
                <div className="col-sm-3"><Sidebar /></div>
                <div className="col">
                    <div clasName="row">
                        <Header />
                    </div>
                    <div className="row">
                        <Switch>
                            <Route path="/about">
                                <Pages.MyJobs />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;