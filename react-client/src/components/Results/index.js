import React, {useState} from 'react'
import {JobCard} from '..'


function Results({data}){

    // console.log(data)

    const renderJobs = data.map(d =>
        <JobCard job={d} />
    );
   
    return (
        <>
            {renderJobs}
        </>
    )
}

export default Results