import React, {useState} from 'react'

import {JobCard} from '..'

import data from '../../temp_data'


function Results(){

    const [jobList, setJobList] = useState(data)
    const renderJobs = jobList.map(d =>
        <JobCard job={d} />
    );
    console.log(jobList)
    return (
        <>
        <main>
            {renderJobs}
        </main>
        </>
    )
}

export default Results