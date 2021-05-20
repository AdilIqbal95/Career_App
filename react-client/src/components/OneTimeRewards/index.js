import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/auth';

function OneTimeRewards({ reward }) {
  const [collected, setCollected] = useState(false)
  const [available, setAvailable] = useState(true);
  const [error, setError] = useState("")

  return (
    <>
      <section className="reward">
        <title className="card-title">
        <h4>{reward.title}</h4>
          {reward.point_change > 0
            ? <p style={{color: "#00ED20"}}> +{reward.point_change}</p>
            : <p style={{color: "#FF3333"}}> -{reward.point_change}</p>}
            {/* </p> */}
            </title>
        <p>{reward.description}</p>
      </section>
    </>

  );

}

export default OneTimeRewards;