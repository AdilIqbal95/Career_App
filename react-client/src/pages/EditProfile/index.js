import React, { useState } from 'react';

const EditProfile = () => {
    const [disabled, setDisabled] = useState(true);

    function handleClick(e) {
        e.preventDefault()
        setDisabled(!disabled);
    }

    return (
        <>
            <header>
                <h1>Edit Your Profile</h1>
            </header>
            <main className="main-container" id="editprofile">
                <form aria-label="edit-profile" id="profile-form">
                    <div className="button-container">
                        {disabled ? <button type="submit" onClick={handleClick}>Edit 🖋</button> :
                            <button type="submit" onClick={handleClick}>Save! ✔️</button>}
                    </div>
                    <label className="user-details" htmlFor="full name">
                        <input type="name" disabled={disabled} placeholder="😊 Full Name" />
                    </label>
                    <label className="user-details" htmlFor="email">
                        <input type="email" disabled={disabled} placeholder="📧 Email" />
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
                        <input type="work exp" disabled={disabled} placeholder="💼 Latest Work Experience" />
                    </label>
                    <label className="user-details" htmlFor="desired job title">
                        <input type="desired job title" disabled={disabled} placeholder="🥇 Desired Job Title" />
                    </label>
                </form>
            </main>
        </>
    )
}

export default EditProfile;