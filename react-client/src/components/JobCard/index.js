import React, { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/auth'
import axios from 'axios';

function JobCard({ job }) {
    const { refresh } = useAuthContext();
    const [saved, setSaved] = useState(false)
    const [formData, setFormData] = useState({
        job_title: job.jobTitle,
        company: job.employerName,
        description: job.jobDescription,
        url: job.jobUrl,
        saved: true,
        applied: false,
        interviewed: false,
        offered: false,
        accepted: false
    })
    const [error, setError] = useState("");
    const handleSaveJob = async () => {
        await refresh()
        let token = localStorage.getItem("token")
        let userID = localStorage.getItem("user_id")
        try {
            const options = {
                headers: { "Authorization": `Bearer ${token}` }
            };
            await axios.post(`${process.env.API_URL}/api/users/${userID}/applications/`, formData, options)
            setSaved(true)
        } catch (err) {
            setError(`❌ Sorry, try again! ${err}`)
        }
    }

    return (
        <div role="listitem" className="search-container">
            <h2>{job.jobTitle} | {job.employerName}
            </h2>
            <p>{job.jobDescription}</p>
            {saved ?
                <button style={{background: "rgb(250, 177, 43)"}}>Saved!</button> :
                <button style={{background: "rgb(250, 177, 43)"}} onClick={handleSaveJob}>Save</button>}
            <button><a href={job.jobUrl}>Apply here!</a></button>
        </div>
    );
}

export default JobCard;