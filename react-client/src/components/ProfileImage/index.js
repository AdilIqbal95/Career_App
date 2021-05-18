import axios from 'axios';
import React, { useState } from 'react';
import { useAuthContext } from '../../contexts/auth'

const ProfileImage = () => {
    const [editProfPic, setEditProfPic] = useState(true);
    const [formData, setFormData] = useState({})
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleEditProfile(e) {
        e.preventDefault()
        setEditProfPic(prev => !prev);
    }

    const refresh = async () => {
        try {
            let refreshToken = localStorage.getItem("refresh")
            console.log(refreshToken)
            const options = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post(`${process.env.API_URL}/api/users/refresh-token/`, { "refresh": `${refreshToken}` }, options)
            console.log(data)
            if (data.err) {
                throw Error(data.detail)
            }
            localStorage.setItem("token", data.access);
            console.log("success! your access token has been updated")
            picUpdateRetry()
        } catch (err) {
            setLoading(false)
            setError(`❌ Sorry, try again!`)
        }
    }

    const picUpdateRetry = async (e) => {
        try {
            let token = localStorage.getItem("token")
            let userID = localStorage.getItem("user_id")
            const optionsTwo = {
                headers: { 'Content-Type': "multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL", "Authorization": `Bearer ${token}` }
            };
            const { data } = await axios.patch(`${process.env.API_URL}/api/users/${userID}/profile/`, { "profile_image": formData }, optionsTwo)
            console.log(data)
            alert("your retry worked!")
        } catch (err) {
            setLoading(false)
            setError(`❌ Sorry, try again!`)
        }
    }

    const handlePicUpdate = async (e) => {
        e.preventDefault()
        try {
            setEditProfPic(!editProfPic);
            setLoading(true)
            let token = localStorage.getItem("token")
            let userID = localStorage.getItem("user_id")
            console.log(userID)
            const options = {
                headers: { 'Content-Type': "multipart/form-data;", "Authorization": `Bearer ${token}` }
            };
            const { data } = await axios.patch(`${process.env.API_URL}/api/users/${userID}/profile/`, { "description": "hello, im natalie", "profile_image": formData }, options)
            alert("you did it! profile picture should be updated soon")
            setLoading(false)
            // location.reload()
        } catch (err) {
            setLoading(false)
            alert("one sec.. authenticating...")
            setError(`❌ Sorry, try again!`)
            refresh()
        }
    }

    const handleInput = e => {
        setFormData(e.target.files[0])
    }

    return (
        <>
            <div className="pic-wrapper">
                {error && <div style={{ position: "absolute" }} id="error">{error}</div>}
                {loading && <div style={{ position: "absolute" }} id="loading">Loading . . .</div>}
                <img src="http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Jabba-the-Hutt.png" className="profile-pic"></img>
                <form aria-label="edit profile pic" className="change-profile-pic" onSubmit={handlePicUpdate}>
                    {editProfPic ?
                        <button onClick={handleEditProfile}> 🖋 </button> :
                        <>
                            <button type="submit" > ✔️ </button>
                            <div><input type="file" id="my-profile-pic" onChange={handleInput} name="profile-pic" /></div>
                            <div style={{ position: "relative" }}><button>x</button></div></>
                    }
                </form>
            </div>
        </>
    )
}

export default ProfileImage