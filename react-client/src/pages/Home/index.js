import React from 'react';
import { Sidebar } from '../../layout'
import { Header } from '../../layout'
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
                            <Route path="/jobs">
                                <Pages.MyJobs />
                            </Route>
                            <Route path="/search">
                                <Pages.Search />
                            </Route>
                            <Route path="/jobbahut">
                                <Pages.JobbaHut />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;