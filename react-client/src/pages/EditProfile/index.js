import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const EditProfile = () => {
    let history = useHistory();
    const [disabled, setDisabled] = useState(true);
    const [cvData, setCvData] = useState({});
    const [formData, setFormData] = useState({
        description: "",
        education: "",
        workexp: "",
        desiredtitle: "",
    })
    const [error, setError] = useState("");

    function handleClick(e) { e.preventDefault(); setDisabled(prev => !prev); }

    const formIncomplete = () => Object.values(formData).some(v => !v)

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        await refresh()
        try {
            const data = new FormData()
            data.append('cv', cvData)
            data.append('description', formData.description)
            data.append('education', formData.education)
            data.append('workexp', formData.workexp)
            data.append('desiredtitle', formData.desiredtitle)
            let token = localStorage.getItem("token")
            let userID = localStorage.getItem("user_id")
            const options = {
                headers: { "Authorization": `Bearer ${token}` }
            };
            await axios.patch(`${process.env.API_URL}/api/users/${userID}/profile/`, data, options)
            setUserData(data)
            alert('profile updated!')
        } catch (err) {
            setError(`❌ Sorry, try again!`)
        }
    }

    const handleInput = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    const handleFileInput = e => { setCvData(e.target.files[0]) }

    return (
        <>
            <header>
                <h1>Edit Your Profile</h1>
            </header>
            <main className="main-container" id="editprofile">
                <form aria-label="edit-profile" id="profile-form" onSubmit={handleUpdateProfile}>
                    <div className="button-container">
                        {disabled ? <button type="submit" onClick={handleClick}>Edit 🖋</button> :
                            <button type="submit" onClick={handleClick} className={formIncomplete() ? 'disabled' : 'enabled'} disabled={formIncomplete()}>Save! ✔️</button>}
                    </div>
                    <label className="user-details" htmlFor="description">
                        <input type="description" name="description" autoComplete="off" value={formData.description} onChange={handleInput} disabled={disabled} placeholder="🖊 Add a bio" />
                    </label>
                    <label className="user-details" htmlFor="education">
                        <select type="education" name="education" disabled={disabled} onChange={handleInput}>
                            <option value="0" selected disabled hidden>📚 Highest Level of Education</option>
                            <option value="1">None</option>
                            <option value="2">A-Level or equivalent</option>
                            <option value="3">Bachelor's</option>
                            <option value="4">Master's</option>
                            <option value="5">PhD</option>
                        </select>
                    </label>
                    <label className="user-details" htmlFor="work experience">
                        <input type="work exp" name="workexp" onChange={handleInput} value={formData.workexp} disabled={disabled} placeholder="💼 Latest Work Experience" />
                    </label>
                    <label className="user-details" htmlFor="desired job title">
                        <input type="desired job title" name="desiredtitle" value={formData.desiredtitle} onChange={handleInput} disabled={disabled} placeholder="🥇 Desired Job Title" />
                    </label>
                    <label className="user-details" htmlFor="cv">
                        <input type="file" id="cv" disabled={disabled} onChange={handleFileInput} name="cv" />
                    </label>
                </form>
                {error && <div style={{ position: "absolute" }} id="error">{error}</div>}
            </main>


        </>
    )
}

export default EditProfile;