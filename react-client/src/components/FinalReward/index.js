import React, { useState } from "react";

function FinalReward({ reward }) {
  const [gif, setGif] = useState();
  const [collected, setCollected] = useState(false);
  const [visible, setVisible] = useState({ display: "none" });

  function collectReward() {
    setCollected(true)
    setVisible({ visibility: "visible" })
    setGif({ backgroundImage: "url('https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif')", color: "white", width: "90%" })
  }
  // alert("Please share JobbaHunt with someone who needs a job!") 

  return (
    <>
      <section className="reward many-time-reward" style={gif}>
        <title className="card-title">
          <h4>{reward.title}</h4>
        </title>
        <h5 style={visible}>{reward.description}</h5>
        <div className="button-container">
          {collected ?
            <button onClick={() => { navigator.clipboard.writeText("http://jobbahunt.netlify.app/register")}}>Please Share JobbaHunt! 💙 </button> :
            <button onClick={collectReward}>Collect!</button>}
        </div>
      </section>
    </>

  );
}

export default FinalReward;