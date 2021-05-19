import React from 'react';
import { VscGithub } from "react-icons/vsc";

const About = () => {

    return (
        <>
            <header>
                <h1>About</h1>
            </header>
            <main style={{fontSize: "18px"}}>
                <p>💼 JobbaHunt is here to help you get your first job! </p>
                <p>💰 Collect Jobbas by applying to jobs, updating your profile or logging in to JobbaHunt daily</p>
                <p>🎁 Spend your Jobbas at JobbaHut - look out for cool rewards </p>
                <p>🎉 Level up and land your next job! </p> 
                <h1><a target="_blank" href="https://github.com/adilIqbal95/Career_App/"><VscGithub /></a></h1>
                <img style={{ position: "fixed", bottom: "0", marginBottom: "2rem", borderRadius: "15px", maxHeight: "300px" }} src="https://igrad-smedia-igrad.netdna-ssl.com/IMAGE/Article-Images/start-here-guides/Start%20Here%20Preparing%20for%20Job%20Hunt/PrepareForJobHunting_Pic1_850x400.gif" />
            </main>
        </>
    )
}

export default About;