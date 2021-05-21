import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useAuthContext } from '../../contexts/auth'
import axios from 'axios'
import { RiDeleteBack2Line } from "react-icons/ri";

const ApplicationCard = ({ job, handleDelete }) => {
    const { refresh } = useAuthContext();
    const [score, setScore] = useState(0)
    const [error, setError] = useState("")
    const [status, setStatus] = useState(job)
    const [progress, setProgress] = useState('0');

    const handleUpdateApplication = (e) => {
        setProgress(e.target.value)
    }

    useEffect(() => {
        const updateStatus = async () => {
            await refresh()
            try {
                let token = localStorage.getItem("token")
                let userID = localStorage.getItem("user_id")
                const options = {
                    headers: { "Authorization": `Bearer ${token}` }
                };
                const sentData = { [progress]: true };
                const { data } = await axios.patch(`${process.env.API_URL}/api/users/${userID}/applications/${job.id}/`, sentData, options)
                setStatus(data)
            } catch (err) {
                setError(`❌ Sorry, try again! ${err}`)
            }
        }
        updateStatus()
    }, [progress]);

    return (
        <>
            <article className="myjob-container">
                <title className="card-title">
                  <h3><a href={job.url} target="_blank">{job.job_title}</a></h3>
                <button onClick={handleDelete} ><RiDeleteBack2Line /></button>
                </title>
                <h4>{job.company}</h4>
                <p>{job.description}</p>
                <form style={{ display: "flex", justifyContent: "flex-end", textAlign: "center" }}>
                    <label className="application-status" htmlFor="application-status">
                        <select onChange={handleUpdateApplication} value={progress} type="application-status" name="application-status">
                            <option value="0" disabled hidden>⚡️ Application Status</option>
                            <option value="1">None</option>
                            <option value="applied">Applied</option>
                            <option value="interviewed">Interviewed</option>
                            <option value="offered">Offered</option>
                            <option value="accepted">Accepted</option>
                        </select>
                    </label>
                </form>
                <ProgressBar>
                    {status.applied &&
                        <ProgressBar striped variant="success" now={25} key={1} label="applied" />}
                    {status.interviewed &&
                        <ProgressBar now={25} key={2} label="interviewed" />}
                    {status.offered &&
                        <ProgressBar striped variant="warning" now={25} key={3} label="offered" />}
                    {status.accepted &&
                        <ProgressBar striped variant="success" now={25} key={4} label="accepted" />}
                </ProgressBar>
                {error && <div id="error">{error}</div>}

            </article>
        </>
    )
}


export default ApplicationCard;