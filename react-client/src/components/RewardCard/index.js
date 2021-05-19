import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/auth'
import data from "../../temp_data";

function RewardCard(){
  const { refresh } = useAuthContext();
  const [rewards, setRewards] = useState([]);
  const [collected, setCollected] = useState(false)
  
  const getRewards = async () => {
    await refresh()
    try {
      let token = localStorage.getItem("token")
      let userID = localStorage.getItem("user_id")
      const options = {
        headers: { "Authorization": `Bearer ${token}` }
      };
      const response = await axios.get(`${process.env.API_URL}/api/rewards/`, options)
      const data = response.data
      setRewards(data)
    } catch (err) {
      console.error(err.message)
    }
  
  }

  const displayRewards = () => {
    return (
      <>
          {collected ?
              <div className="row" id="reward1">
                 {rewards.map(reward => (
                  <section className="col" id="reward1">
                    <h4>{reward.title}</h4>
                    <p>collected!</p>
                  </section>
                ))}
              </div> : 
              <div className="row" id="reward1">
                {rewards.map(reward => (
                  <section className="col" id="reward1">
                    <h4>{reward.title}</h4>
                    <p>{reward.description}</p>
                    <button onClick={collectReward}>Collect!</button>
                  </section>
                ))}
              </div>
          }
      </>
    )
  }
  
  function collectReward() {
    setCollected(true)
  }

  useEffect(() => {
    getRewards();
  },[]);

  // console.log('Rewards are: ',rewards)

  return (
 
      <>
        {displayRewards()}
      </>
      
    
  );

}

export default RewardCard;