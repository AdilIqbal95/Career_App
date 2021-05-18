import React, { useState } from 'react';

const EditProfile = () => {
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        bio: "",
        education: "",
        workexp: "",
        desiredtitle: ""
    })

    function handleClick(e) { e.preventDefault(); setDisabled(!disabled); }

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        await refresh()
        try {
            let token = localStorage.getItem("token")
            let userID = localStorage.getItem("user_id")
            const options = {
                headers: { "Authorization": `Bearer ${token}` }
            };
            await axios.patch(`${process.env.API_URL}/api/users/${userID}/profile/`, formData, options)
            setUserData(data)
            alert('profile updated!')
        } catch (err) {
            setError(err)
        }
    }

    const handleInput = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    const handleFileInput = e => { setFormData(e.target.files[0]) }

    return (
        <>
            <header>
                <h1>Edit Your Profile</h1>
            </header>
            <main className="main-container" id="editprofile">
                <form aria-label="edit-profile" id="profile-form" onSubmit={handleUpdateProfile}>
                    <div className="button-container">
                        {disabled ? <button type="submit" onClick={handleClick}>Edit 🖋</button> :
                            <button type="submit" onClick={handleClick}>Save! ✔️</button>}
                    </div>
                    <label className="user-details" htmlFor="full name">
                        <input type="name" value={formData.name} onChange={handleInput} disabled={disabled} placeholder="😊 Full Name" />
                    </label>
                    <label className="user-details" htmlFor="email">
                        <input type="email" value={formData.email} onChange={handleInput} disabled={disabled} placeholder="📧 Email" />
                    </label>
                    <label className="user-details" htmlFor="education">
                        <select type="education" disabled={disabled}>
                            <option value="" selected disabled hidden>📚 Highest Level of Education</option>
                            <option value="1">None</option>
                            <option value="2">A-Level or equivalent</option>
                            <option value="3">Bachelor's</option>
                            <option value="4">Master's</option>
                            <option value="5">PhD</option>
                        </select>
                    </label>
                    <label className="user-details" htmlFor="work experience">
                        <input type="work exp" onChange={handleInput} value={formData.workexp} disabled={disabled} placeholder="💼 Latest Work Experience" />
                    </label>
                    <label className="user-details" htmlFor="desired job title">
                        <input type="desired job title" value={formData.desiredtitle} onChange={handleInput} disabled={disabled} placeholder="🥇 Desired Job Title" />
                    </label>
                    <label className="user-details" htmlFor="desired job title">
                        <input type="file" id="cv" onChange={handleFileInput} name="cv" />
                    </label>
                </form>
            </main>
        </>
    )
}

export default EditProfile;