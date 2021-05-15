import React from 'react';

const JobbaHut = () => {

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
                        <section id="daily-reward">
                            <h4>Daily Reward 🎁</h4>
                            <p ><em>"Morning Motivation and add some motivational quote here!"</em></p>
                            <button>Collect!</button>
                        </section>
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