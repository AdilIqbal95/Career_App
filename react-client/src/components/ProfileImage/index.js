import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../contexts/auth'

const ProfileImage = () => {
    const { refresh } = useAuthContext();
 
    const [editProfPic, setEditProfPic] = useState(true);
    const [formData, setFormData] = useState({})
    const [userData, setUserData] = useState()
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    function handleEditProfile(e) {
        e.preventDefault()
        setEditProfPic(prev => !prev);
    }

    const handlePicUpdate = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData()
            data.append('profile_image', formData)
            setEditProfPic(prev => !prev);
            setLoading(true)

            let token = localStorage.getItem("token")
            let userID = localStorage.getItem("user_id")

            const options = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            await axios.patch(`${process.env.API_URL}/api/users/${userID}/profile/`, data, options)
            
            // update picture reward
            try {
                await axios.post(`${process.env.API_URL}/api/users/${userID}/rewards/`, {'reward': 3}, options)    
            } catch (error) {}
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err);
            setError(`❌ Sorry, try again!`)
            refresh()
        }
    }

    const handleInput = e => {
        setFormData(e.target.files[0])
    }

    useEffect(() => {
        async function profileData() {
            await refresh()
            try {
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
    }, [loading]);

    return (
        <>
            <div className="pic-wrapper">
                {error && <div style={{ position: "absolute" }} id="error">{error}</div>}
                {loading && <div style={{ position: "absolute" }} id="loading">Loading . . .</div>}
                {userData ? <img className="profile-pic" src={userData.profile_image}></img>
                    : <img src="https://i.imgur.com/tfnVE8n.png" className="profile-pic"></img>}
                <form aria-label="edit profile pic" role="edit-profile" className="change-profile-pic" onSubmit={handlePicUpdate}>
                    {editProfPic ?
                        <button onClick={handleEditProfile}> 🖋 </button> :
                        <>
                            <button type="submit" > ✔️ </button>
                            <div><input type="file" id="my-profile-pic" onChange={handleInput} name="profile-pic" /></div>
                            {/* <div style={{ position: "relative" }}><button>x</button></div> */}
                            </>
                    }
                </form>
            </div>
        </>
    )
}

export default ProfileImage