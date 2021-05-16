import React, { useState } from 'react';

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
                    <div className="first-row-container">
                        {dailyReward()}
                        <section id="trophy-collection">
                            <h4>My Trophies 🏆</h4>
                            {/* <Trophies data={trophies} /> */}

                        </section>
                    </div>
                </header>

            </div>
        </>
    )
}

export default JobbaHut;