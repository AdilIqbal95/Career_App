import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth'
import { ProfileImage } from '../../components'
import { BsInfoCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { BiCalendarAlt } from "react-icons/bi";

const Profile = () => {
    const { currentUser, logout, refresh } = useAuthContext();
    const [userData, setUserData] = useState();
    const [username, setUsername] = useState(localStorage.getItem('username'));

    const history = useHistory();

    useEffect(() => {
        async function profileData() {
            try {
                // await refresh()
                let token = localStorage.getItem("token")
                let userID = localStorage.getItem("user_id")
                const options = {
                    headers: { "Authorization": `Bearer ${token}` }
                };
                const { data } = await axios.get(`${process.env.API_URL}/api/users/${userID}/profile/`, options)
                setUserData(data)
                localStorage.setItem("jobbas", data.points)
            } catch {
                console.warn("There's an error!!! Cannot fetch user profile details")
            }
        } profileData()
    }, [userData]);

    return (
        <>
            <div className="profile-container">
                <main id="profile">
                    <div className="wrapper">
                        {!currentUser ?
                            <h3 style={{ display: "flex", alignItems: "center" }}>nothing to see here!! 🔒</h3> :
                            <>
                                <ProfileImage />

                                <div className="inputs" style={{ textAlign: "center" }}>
                                    {username && <h3 className="username">{username}</h3>}
                                    {userData ? <p>{userData.description}</p> : <p>Add a bio! ⤵️</p>}
                                    <button role="edit profile" onClick={() => { history.push('/home/editprofile') }} type="bio-save">Edit Profile</button>
                                </div>

                                <div className="game-stats" style={{ textAlign: "center" }}>
                                    <h5>Daily Streak:</h5>
                                    <div className="calender">
                                        <BiCalendarAlt /> {userData && <p className="number">{userData.daily_streak} </p>}</div>
                                </div>


                                <div className="coin-stats" style={{ textAlign: "center" }}>
                                    {userData ? <h3 style={{ fontSize: "28px" }}>💰 {userData.points} Jobbas 💰</h3> : <p>Loading, please wait! 🙏🏻</p>}
                                    <button onClick={() => { history.push('/home/jobbahut') }} type="exchange-coins">Exchange at JobbaHut!</button>
                                </div>
                                <footer>
                                    <button onClick={() => { history.push('/home/about') }} id="info" role="more info"><BsInfoCircle /></button>
                                    <button role="logout" id="logout" onClick={logout}><FiLogOut /></button>
                                </footer>
                            </>}
                    </div>
                </main>
            </div>

        </>
    )
}

export default Profile;