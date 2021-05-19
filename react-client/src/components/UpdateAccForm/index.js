import React, { useState } from 'react'
import { useAuthContext } from "../../contexts/auth";
import { useHistory } from 'react-router-dom';

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
        try {
            await refresh()
            let token = localStorage.getItem("token")
            let userID = localStorage.getItem("user_id")
            const options = {
                headers: { "Authorization": `Bearer ${token}` }
            };
            await axios.patch(`${process.env.API_URL}/api/users/${userID}/`, formData, options)
            alert('account updated!')
        } catch (err) {
            setLoading(false)
            setError(`❌ Sorry, try again!`)
        }
    }

    return (
        <>
            <form aria-label="update-account" id="update-acc-form" onSubmit={handleUpdateAccount}>
                <div className="button-container">
                    {disabled ? <button type="submit" onClick={handleClick}>Edit 🖋</button> :
                        <button type="submit" onClick={handleClick} className={formIncomplete() ? 'disabled' : 'enabled'} disabled={formIncomplete()}>Save! ✔️</button>}
                    <button onClick={() => { history.push('/home/editprofile') }}>Edit Profile</button>
                </div>
                <label>
                    <input type="email" disabled={disabled} placeholder="email" name="email" onChange={handleInput} value={formData.email} />
                </label>
                <label>
                    <input type="first_name" disabled={disabled} placeholder="first_name" name="first_name" onChange={handleInput} value={formData.first_name} />
                </label>
                <label>
                    <input type="last_name" disabled={disabled} placeholder="last_name" name="last_name" onChange={handleInput} value={formData.last_name} />
                </label>
            </form>
            { error && <div id="error">{error}</div>}

        </>
    )
}

export default UpdateAccForm;