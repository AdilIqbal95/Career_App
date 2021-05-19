import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/auth'

function RewardCard(){
  const { refresh } = useAuthContext();
  const getRewards = async () => {
    await refresh()
    try {
      let token = localStorage.getItem("token")
      let userID = localStorage.getItem("user_id")
      const options = {
        headers: { "Authorization": `Bearer ${token}` }
      };
      const response = await axios.get(`${process.env.API_URL}/api/rewards/`, options)
      // const jsonData = await response.json();
      const data = response.data
      console.log(data)
    } catch (err) {
      console.error(err.message)
    }
  }
  
  useEffect(() => {
    getRewards();
  },[]);

  return (
    <section class="col" id="reward1">
      <h4>Reward 1</h4>
    </section>
  );
  }

export default RewardCard;