import React, { useEffect, useState } from "react";


function JobCard({ job }) {
        
  return (
      <div role="listitem" className="search-container">
        <h2>{job.jobTitle} | {job.employerName}
        <button>test</button>
        </h2>
        <p>{job.jobDescription}</p>
      </div>
  );

}

export default JobCard;