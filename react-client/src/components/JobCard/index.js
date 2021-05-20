import React, { useEffect, useState } from "react";


function JobCard({job}){
    
  return (
      <div role="listitem">
        <h2 style={{marginTop: "1rem"}}>{job.jobTitle} | {job.employerName}</h2>
        <p>{job.jobDescription}</p>
      </div>
  );
  
}

export default JobCard;