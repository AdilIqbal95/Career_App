import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const ApplicationCard = ({ job }) => {
    console.log(job)

    const [score, setScore] = useState(0)
    const [status, setStatus] = useState("saved")

    return (
        <>
            <article className="myjob-container">
                <h3><a href={job.url} target="_blank">{job.job_title}</a></h3> <h4>{job.company}</h4>
                <p>{job.description}</p>

                <ProgressBar>
                {job.applied && 
                    <ProgressBar striped variant="success" now={25} key={1} label="applied"/>}
                {job.interviewed &&   
                    <ProgressBar variant="warning" now={50} key={2} label="interviewed" />}
                {job.offered && 
                    <ProgressBar striped variant="danger" now={75} key={3} label="offered" />}
                {job.acccepted && 
                    <ProgressBar striped variant="danger" now={100} key={3} label="accepted" />}
                </ProgressBar>


                <ProgressBar now={20} label={`${status}`} />
            </article>
        </>
    )
}

export default ApplicationCard;