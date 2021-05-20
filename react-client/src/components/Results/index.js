import React, {useState} from 'react'
import {JobCard} from '..'


function Results({data}){

    const renderJobs = data.map(d =>
        <JobCard key={d.id} job={d} />
    );
   
    return (
        <>
            {renderJobs}
        </>
    )
}

export default Results