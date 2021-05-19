import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../contexts/auth'

const MyJobs = () => {
    const { refresh } = useAuthContext();
    const [myJobs, setMyJobs] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchMyJobs() {
            try {
                await refresh()
                let token = localStorage.getItem("token")
                let userID = localStorage.getItem("user_id")
                const options = {
                    headers: { "Authorization": `Bearer ${token}` }
                };
                const { data } = await axios.get(`${process.env.API_URL}/api/users/${userID}/applications/`, options)
                if (data.err) {
                    throw new Error(data.err)
                }
                setMyJobs(data)
            } catch {
                console.warn("There's an error!!! Cannot fetch user jobs!")
                setError('Error loading feed')
            }
        } fetchMyJobs();
    }, []);

    const renderMyJobs = () => myJobs.map((job) => (<ApplicationCard applied={job} />))

    return (
        <>
            <div className="main-container">
                <header>
                    <h1>MyJobs</h1>
                </header>
                <section>
                    {renderMyJobs()}
                    {error && <div id="error">{error}</div>}
                </section>
            </div>
        </>
    )
}

export default MyJobs;