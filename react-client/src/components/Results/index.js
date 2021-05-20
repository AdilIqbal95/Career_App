import React, {useState} from 'react'
import {JobCard} from '..'


function Results(data){

    const [jobList, setJobList] = useState(data.data)
    console.log(jobList)
    const renderJobs = jobList.map(d =>
        <JobCard job={d} />
    );
   
    return (
        <>
            {renderJobs}
        </>
    )
}

export default Results