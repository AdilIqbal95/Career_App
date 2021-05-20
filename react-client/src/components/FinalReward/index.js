import React, { useState } from "react";

function FinalReward({ reward }) {
  const [gif, setGif] = useState()

  function collectReward() {
    setGif({ backgroundImage: "url('https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif')", color: "white" })
  }

  return (
    <>
      <section className="reward many-time-reward" style={gif}>
        <title className="card-title">
          <h4>{reward.title}</h4>
        </title>
        <p>{reward.description}</p>
        <div className="button-container"><button onClick={collectReward}>Collect!</button></div>
      </section>
    </>

  );
}

export default FinalReward;