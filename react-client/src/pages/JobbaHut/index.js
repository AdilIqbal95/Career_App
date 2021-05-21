import React, { useState, useEffect } from 'react';
import { RewardCard, OneTimeRewards, FinalReward } from '../../components';
import { useAuthContext } from '../../contexts/auth'
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'

const JobbaHut = () => {
  const { refresh } = useAuthContext();
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false)
    } catch (err) {
      console.error(err.message)
    }
  }

  function collectReward() {
    setCollected(false)
  }

  useEffect(() => {
    getRewards();
  }, []);

  function renderFinalReward() {
    let finalReward = rewards.find(r => r.id === 9);
    return (
      finalReward && <FinalReward reward={finalReward} />
    )
  }

  console.log(rewards.find(r => r.id === 9))

  return (
    <>    <h1>JobbaHut</h1>
      <div className="main-container" id="jobbahut">
        {loading ? <div id="loading"> <Spinner animation="border" variant="warning" role="status" /></div> :
          <>
            {
              rewards.filter(r => !r.one_time && r.id !== 9).map(reward => (
                <RewardCard key={reward.id} reward={reward} />
              ))
            }
            {renderFinalReward()}
         
            <h1>One Time Rewards - Updates automatically!</h1>

            {rewards.filter(r => r.one_time).map(reward => (
              <OneTimeRewards key={reward.id} reward={reward} />
            ))}
          </>
        }

      </div>
    </>
  )
}

export default JobbaHut;