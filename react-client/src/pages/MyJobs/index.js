import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../contexts/auth'
import { ApplicationCard } from '../../components'

const MyJobs = () => {
    const { refresh } = useAuthContext();
    const [myJobs, setMyJobs] = useState([]);
    const [error, setError] = useState();
    const [update, setUpdate] = useState(false)

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
                setError('❌ Error loading jobs')
            }
        } fetchMyJobs();
    }, [update]);

    const handleDelete = async (jobID) => {
        await refresh()
        try {
            let token = localStorage.getItem("token")
            let userID = localStorage.getItem("user_id")
            const options = {
                headers: { "Authorization": `Bearer ${token}` }
            };
            await axios.delete(`${process.env.API_URL}/api/users/${userID}/applications/${jobID}/`, options)
            setUpdate(prev => !prev)
        } catch (err) {
            setError(`❌ Sorry, try again! ${err}`)
        }
    }

    return (
        <>
            <h1>MyJobs</h1>
            <div className="main-container" style={{ overflowY: "auto" }}>
                <section>
                    {myJobs.length === 0 ? <h3>Looks like you've not got any jobs saved. Head over to the <a href="/home/search">search</a> page!</h3> :
                        myJobs.map(job => <ApplicationCard key={job.id} job={job} handleDelete={() => handleDelete(job.id)} />)}
                    {error && <div id="error">{error}</div>}
                </section>
            </div>
        </>
    )
}

export default MyJobs;