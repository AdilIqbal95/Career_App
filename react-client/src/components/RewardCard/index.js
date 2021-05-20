import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/auth'
import data from "../../temp_data";

function RewardCard({reward}){
  
  const [collected, setCollected] = useState(false)
  
  function collectReward() {
    setCollected(true)
  }

  return (
      <>
        <section className="reward">
          <h4>{reward.title}</h4>
          <p>{reward.description}</p>
          
          {collected ? 
            <p>Collected!</p>
            : <button onClick={collectReward}>Collect!</button>}
        </section>
      </>
  );

}

export default RewardCard;