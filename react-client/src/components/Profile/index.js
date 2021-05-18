import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth'

const Profile = () => {
    const { currentUser, logout } = useAuthContext();
    const { editProfPic, setEditProfPic } = useState(true)

    const history = useHistory();

    function handleClickToJobbahut() {
        history.push('/home/jobbahut')
    }

    function goToEditProfile() {
        history.push('/home/editprofile')
    }

    function goToAbout() {
        history.push('/home/about')
    }

    function handleEditProfile(e) {
        e.preventDefault()
        setEditProfPic(!editProfPic);
    }

    return (
        <>
            <div className="profile-container">
                <main id="profile">
                    <div className="wrapper">
                        {!currentUser ?
                            <h3 style={{ display: "flex", alignItems: "center" }}>nothing to see here!! 🔒</h3> :
                            <>
                                <img src="http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Jabba-the-Hutt.png" className="profile-pic"></img>
                                <form >
                                    <input type="file" id="my-profile-pic" name="profile-pic" />
                                    {editProfPic ? <button type="submit" onSubmit={handleEditProfile}>save </button> : <button type="submit" onSubmit={handleEditProfile}>edit</button>}
                                </form>

                                <div className="username">Jobba</div>

                                <div className="game-stats">
                                    <label htmlFor="level"> <h3>10 🏆</h3> </label>
                                    <progress id="level" value="32" max="100"></progress>
                                </div>

                                <div className="inputs">
                                    <label>Bio</label>
                                    <input type="bio" placeholder="give a short description" />
                                    <button onClick={goToEditProfile} type="bio-save">Edit Profile</button>
                                </div>

                                <div className="coin-stats">
                                    <h3>178💰</h3>
                                    <button onClick={handleClickToJobbahut} type="exchange-coins">Exchange at JobbaHut!</button>
                                </div>
                                <footer>
                                    <button onClick={goToAbout} id="info" role="more info">infooo</button>
                                    <button role="logout" id="logout" onClick={logout}>Logout</button>
                                </footer>
                            </>}
                    </div>
                </main>
            </div>

        </>
    )
}

export default Profile;