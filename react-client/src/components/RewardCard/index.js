import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/auth'
import data from "../../temp_data";

function RewardCard({reward}){
  
  const [collected, setCollected] = useState(false)
  // const displayRewards = () => {
  //   return (
  //     <>
  //     </>
  //   )
  // }
  
  async function collectReward() {

    let token = localStorage.getItem("token")
    let userID = localStorage.getItem("user_id")

    const options = {
      headers: { "Authorization": `Bearer ${token}` }
    };
    try {
      await axios.post(`${process.env.API_URL}/api/users/${userID}/rewards/`, { "reward": reward.id }, options)
      setCollected(true)
  }

  // <section className="col" id="reward1">
  //                           <h4>{reward.title}</h4>
  //                           <p>collected!</p>
  //                       </section>

  // console.log('Rewards are: ',rewards)

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
          {collected ? 
        {collected ?
          <p>Collected!</p>
          : <button disabled={!available} onClick={collectReward}>Collect!</button>}
      </section>
    </>

  );

}

export default RewardCard;