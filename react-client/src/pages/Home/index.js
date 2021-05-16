import React from 'react';
import { Sidebar } from '../../layout'
import { Header } from '../../layout'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import * as Pages from '../index';

const Home = () => {

    let match = useRouteMatch();

    return (
        <>
            <div className="row" id="homepage">
                <div className="col-sm-3"><Sidebar /></div>
                <div className="col">
                    <div className="row">
                        <Header />
                    </div>
                    <div className="row">
                        <Switch>
                            <Route path={`${match.path}/jobs`}>
                                <Pages.MyJobs />
                            </Route>
                            <Route path={`${match.path}/search`}>
                                <Pages.Search />
                            </Route>
                            <Route path={`${match.path}/jobbahut`}>
                                <Pages.JobbaHut />
                            </Route>
                            <Route path={`${match.path}/editprofile`}>
                                <Pages.EditProfile />
                            </Route>
                            <Route path={`${match.path}/about`}>
                                <Pages.About />
                            </Route>
                        </Switch>
                        
                       

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;