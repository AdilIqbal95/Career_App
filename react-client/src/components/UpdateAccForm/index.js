import React, { useState } from 'react'
import { useAuthContext } from "../../contexts/auth";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const UpdateAccForm = () => {
    let history = useHistory();
    const { refresh } = useAuthContext();
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState({ email: "", first_name: "", last_name: "" })
    const [error, setError] = useState();

    const handleInput = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const formIncomplete = () => Object.values(formData).some(v => !v)

    function handleClick(e) { e.preventDefault(); setDisabled(prev => !prev); }

    const handleUpdateAccount = async (e) => {
        e.preventDefault()
        await refresh()
        try {
            let token = localStorage.getItem("token")
            let userID = localStorage.getItem("user_id")
            const options = {
                headers: { "Authorization": `Bearer ${token}` }
            };
            await axios.patch(`${process.env.API_URL}/api/users/${userID}/`, formData, options)
            alert('account updated!')
        } catch (err) {
            setError(`❌ Sorry, try again! ${err}`)
        }
    }

    return (
        <>
            <form aria-label="update-account" id="update-acc-form" onSubmit={handleUpdateAccount}>
                <div className="button-container">
                    {disabled ? <button onClick={handleClick}>Edit 🖋</button> :
                        <button type="submit" className={formIncomplete() ? 'disabled' : 'enabled'} disabled={formIncomplete()}>Save! ✔️</button>}
                    <button onClick={() => { history.push('/home/editprofile') }}>Edit Profile</button>
                </div>
                <label>
                    <input type="email" disabled={disabled} placeholder="📧 Email" name="email" onChange={handleInput} value={formData.email} />
                </label>
                <label>
                    <input type="first_name" disabled={disabled} placeholder="🥇 First Name" name="first_name" onChange={handleInput} value={formData.first_name} />
                </label>
                <label>
                    <input type="last_name" disabled={disabled} placeholder="🥈 Last Name" name="last_name" onChange={handleInput} value={formData.last_name} />
                </label>
            </form>
            { error && <div id="error">{error}</div>}

        </>
    )
}

export default UpdateAccForm;