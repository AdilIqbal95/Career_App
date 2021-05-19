import React, { useState } from 'react';

const ApplicationCard = ({job}) => {
    console.log(job)

    const [score, setScore] = useState(0)

    function progress() {
        if (job.acccepted === true) {
            return setScore(100);
        } else if (job.offered === true) {
            return setScore(80);
        } else if (job.interviewed === true) {
            return setScore(60);
        } else if (job.applied === true) {
            return setScore(40);
        } else if (job.saved === true) {
            return setScore(20);
        } else {
            return setScore(0);
        }
    }

    return (
        <>
       <h2><a href={job.url} target="_blank">{job.job_tile}</a></h2> | <h2>{job.company}</h2>
       <p>{job.description}</p>

       <ProgressBar now={score} label={`${score}%`} />

        </>
    )
}

export default ApplicationCard;