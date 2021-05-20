import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/auth'
import data from "../../temp_data";

function RewardCard({ reward }) {

  const [collected, setCollected] = useState(false)

  const [available, setAvailable] = useState(true);

  async function collectReward() {

    let token = localStorage.getItem("token")
    let userID = localStorage.getItem("user_id")

    const options = {
      headers: { "Authorization": `Bearer ${token}` }
    };
    try {
      await axios.post(`${process.env.API_URL}/api/users/${userID}/rewards/`, { "reward": reward.id }, options)
      setCollected(true)
    } catch (error) {
      setAvailable(false)
    }

  }

  return (

    <>
      <section className="reward">
        <h4>{reward.title}</h4>
        <p>{reward.description}</p>
        <p className="reward-points">
          {reward.point_change > 0
            ? `+${reward.point_change}`
            : `-${reward.point_change}`}</p>
        {collected ?
          <p>Collected!</p>
          : <button disabled={!available} onClick={collectReward}>Collect!</button>}
      </section>
    </>
  );

}

export default RewardCard;