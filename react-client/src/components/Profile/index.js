import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth'
import { ProfileImage } from '../../components'
import { BsInfoCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
    const { currentUser, logout, refresh } = useAuthContext();
    const [userData, setUserData] = useState()

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
            } catch {
                console.warn("There's an error!!! Cannot fetch user profile details")
            }
        } profileData()
    }, []);

    return (
        <>
            <div className="profile-container">
                <main id="profile">
                    <div className="wrapper">
                        {!currentUser ?
                            <h3 style={{ display: "flex", alignItems: "center" }}>nothing to see here!! 🔒</h3> :
                            <>
                                <ProfileImage />
                                <div className="username">Jobba</div>

                                <div className="game-stats">
                                    <label htmlFor="level"> <h3>1 🏆</h3> </label>
                                    <progress id="level" value="32" max="100"></progress>
                                </div>

                                <div className="inputs">
                                    {userData && <p>{userData.description}</p>}
                                    <button role="edit profile" onClick={() => { history.push('/home/editprofile') }} type="bio-save">Edit Profile</button>
                                </div>

                                <div className="coin-stats">
                                    {userData && <h3>{userData.points} 💰</h3>}
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