import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/auth';

function RewardCard({ reward }) {
  const [collected, setCollected] = useState(false)
  const [available, setAvailable] = useState(true);
  const [error, setError] = useState("")

  async function collectReward() {
    let token = localStorage.getItem("token")
    let userID = localStorage.getItem("user_id")
    const options = {
      headers: { "Authorization": `Bearer ${token}` }
    };
    try {
      await axios.post(`${process.env.API_URL}/api/users/${userID}/rewards/`, { "reward": reward.id }, options)
      setCollected(true)
    } catch (err) {
      setAvailable(false)
      setError(`❌ Sorry, not enough points!`)
    }
  }

  return (
    <>
      <section className="reward">
        <title className="card-title">
        <h4>{reward.title}</h4>
        {/* <p className="reward-points"> */}
          {reward.point_change > 0
            ? <p style={{color: "#00ED20"}}> +{reward.point_change}</p>
            : <p style={{color: "#FF3333"}}> -{reward.point_change}</p>}
            {/* </p> */}
            </title>
        <p>{reward.description}</p>
     
        {collected ?
          <p style={{textAlign: "center"}}>✅ Collected!</p>
          : <div className="button-container"><button disabled={!available} onClick={collectReward}>Collect!</button></div>}
        {error && <div id="error">{error}</div>}
      </section>
    </>

  );

}

export default RewardCard;