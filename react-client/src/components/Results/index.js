import React, {useState} from 'react'
import {JobCard} from '..'


function Results({data}){

    const renderJobs = data.map((d,i) =>
        <JobCard key={i} job={d} />
    );
   
    return (
        <>
            {renderJobs}
        </>
    )
}

export default Results