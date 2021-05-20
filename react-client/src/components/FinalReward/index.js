import axios from "axios";
import React, { useState } from "react";

function FinalReward({ reward }) {
    console.log(reward)
  const [collected, setCollected] = useState(false)
  const [available, setAvailable] = useState(true);
  const [error, setError] = useState("")
  const [ jobbas, setJobbas] = useState(localStorage.getItem('jobbas'));

  async function collectReward() {
    let token = localStorage.getItem("token")
    let userID = localStorage.getItem("user_id")
    const options = {
      headers: { "Authorization": `Bearer ${token}` }
    };
    try {
      await axios.post(`${process.env.API_URL}/api/users/${userID}/rewards/`, { "reward": reward.id, "points_change": jobbas }, options)
      setCollected(true)
    } catch (err) {
      setAvailable(false)
      setError(`❌ Sorry, not enough points!`)
    }
  }

  return (
    <>
      {/* <section className="reward many-time-reward">
      <title className="card-title">
        <h4>{reward.title}</h4>
          <p style={{color: "#FF3333"}}> -{jobbas}</p>
            </title>
        <p>{reward.description}</p>
      </section> */}
    </>

  );

}

export default FinalReward;