import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../contexts/auth';
import { Switch, Route, useRouteMatch, Redirect, useParams, useHistory } from 'react-router-dom';
import * as Pages from '../index';
import { Header, Sidebar } from '../../layout'

const Home = () => {
    const [ visible, setVisible ] = useState();
    const { currentUser } = useAuthContext();
    const { username } = useParams();

    let match = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            currentUser.username === username 
            setVisible({visibility: "visible"})
        } else {
            setVisible({visibility: "hidden"})
        }
    }, [currentUser, username])

    return (
        <>
            <div className="row" id="homepage">
                <div className="col-sm-3"><Sidebar /></div>
                <div className="col">
                    <div className="row">
                        <Header />
                    </div>
                    <div className="row" style={visible}>
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
                            <Route path={`${match.path}/*`}>
                                <Redirect to="/home" />
                            </Route>
                        </Switch>



                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;