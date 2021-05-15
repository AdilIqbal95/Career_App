import React from 'react';

const Profile = () => {

    return (
        <>
            <div className="profile-container">
                <main id="profile">
                    <img src="http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Jabba-the-Hutt.png" class="brand-logo"></img>
                    <div class="username">Jobba</div>
                    <div class="inputs">
                        <label>Bio</label>
                        <input type="bio" placeholder="give a short description" />
                        <button type="submit">Save</button>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Profile;