import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/auth';

function RewardCard({ reward }) {
  const [collected, setCollected] = useState(false)
  const { updateProfile } = useAuthContext();
  const [available, setAvailable] = useState(true);
  const [error, setError] = useState("")

  async function collectReward() {
    let token = localStorage.getItem("token")
    let userID = localStorage.getItem("user_id")
    const options = {
      headers: { "Authorization": `Bearer ${token}` }
    };
    // TODO: Fix daily streak to update 
    if (reward.id === 4) {
      const streak = await (await axios.get(`${process.env.API_URL}/api/users/${userID}/profile/`, options)).data.daily_streak
      await axios.patch(`${process.env.API_URL}/api/users/${userID}/profile/`, { "daily_streak": streak + 1 }, options)
    }
    try {
      await axios.post(`${process.env.API_URL}/api/users/${userID}/rewards/`, { "reward": reward.id }, options)
      setCollected(true)
      updateProfile()
    } catch (err) {
      setAvailable(false)
      setError(`❌ Sorry, not enough points!`)
    }
  }

  return (
    <>
      <section className="reward many-time-reward">
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