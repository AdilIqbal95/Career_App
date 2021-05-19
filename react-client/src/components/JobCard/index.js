import React, { useEffect, useState } from "react";

function JobCard({job}){
    
 
  return (
      <div role="listitem">
        <h2 style={{marginTop: "1rem"}}>{job.Role}|{job.Company}</h2>
        <p>{job.Description}</p>
      </div>
  );
  
  }

export default JobCard;