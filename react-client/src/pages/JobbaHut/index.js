import React, { useState } from 'react';
import {RewardCard} from '../../components';

const JobbaHut = () => {
    const [showCollected, setCollected] = useState(true)

    function dailyReward() {
        return (
            <>
                {showCollected ?
                    <section id="daily-reward">
                        <h4>Daily Reward 🎁</h4>
                        <p ><em>"Morning Motivation and add some motivational quote here!"</em></p>
                        <button onClick={collectReward}>Collect!</button>
                    </section> : <section id="daily-reward">
                        <h4>Daily Reward 🎁</h4>
                        <p>collected!</p>
                    </section>
                }
            </>
        )
    }

    function collectReward() {
        setCollected(false)
    }

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
        <>
            <div className="main-container" id="jobbahut">
                <header>
                    <h1>JobbaHut</h1>
                    <div class="row">
                        <section class="col">
                            {dailyReward()}
                        </section>
                        <section class ="col"id="trophy-collection">
                            <h4>My Trophies 🏆</h4>
                            {/* <Trophies data={trophies} /> */}
                        </section>
                    </div>
                    <div class="row">
                        <RewardCard/>
                    </div>

                    
                </header>

            </div>
        </>
    )
}

export default JobbaHut;