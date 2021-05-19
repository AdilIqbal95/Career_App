import React, { useState, useEffect } from 'react';
import {RewardCard} from '../../components';
import { useAuthContext } from '../../contexts/auth'
import axios from "axios";

const JobbaHut = () => {
    const [showCollected, setCollected] = useState(true)
    const { refresh } = useAuthContext();
    const [rewards, setRewards] = useState([]);
    
    
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



    // function dailyReward() {
    //     return (
    //         <>
    //             {showCollected ?
    //                 <section id="daily-reward">
    //                     <h4>Daily Reward 🎁</h4>
    //                     <p ><em>"Morning Motivation and add some motivational quote here!"</em></p>
    //                     <button onClick={collectReward}>Collect!</button>
    //                 </section> : <section id="daily-reward">
    //                     <h4>Daily Reward 🎁</h4>
    //                     <p>collected!</p>
    //                 </section>
    //             }
    //         </>
    //     )
    // }

    function collectReward() {
        setCollected(false)
    }

    useEffect(() => {
        getRewards();
      },[]);
    // function Trophies({data}){
    //     return (
    //         data.map(item => <span><h3 className="trophies">{item.login}</h3><TrophyAvatar url={item.avatar_url}/></span>)
    //     )
    // }

    // function TrophyAvatar({url}) {
    //     return (
    //         <img src={url} className="user-avatar" alt="github-user-avatar"/>
    //     )
    // }

    return (
        <>    <h1>JobbaHut</h1>
            <div className="main-container" id="jobbahut">
            
                    {/* <div className="row">
                        <section className="col">
                            {dailyReward()}
                        </section>
                    </div> */}
                  
                        {rewards.map(reward => (
                        <RewardCard reward={reward}/>
                        ))}
              
                    
            </div>
        </>
    )
}

export default JobbaHut;