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
  
  function collectReward() {
    setCollected(true)
  }

  // <section className="col" id="reward1">
  //                           <h4>{reward.title}</h4>
  //                           <p>collected!</p>
  //                       </section>

  // console.log('Rewards are: ',rewards)

  return (
 
      <>
        <section className="col" id="reward1">
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