import React, { useState } from 'react'
import { useAuthContext } from "../../contexts/auth";
import { useHistory } from 'react-router-dom';

const UpdateAccForm = () => {
    let history = useHistory();
    const { refresh } = useAuthContext();
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState({ username: "", password: "" })
    const [error, setError] = useState();

    const handleInput = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const formIncomplete = () => Object.values(formData).some(v => !v)

    function handleClick(e) { e.preventDefault(); setDisabled(prev => !prev); }

    const handleUpdateAccount = async (e) => {
        e.preventDefault()
        try {
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
                    <input type="username" disabled={disabled} placeholder="username" name="username" onChange={handleInput} value={formData.username} />
                </label>
                <label>
                    <input type="password" disabled={disabled} placeholder="password" name="password" onChange={handleInput} value={formData.password} />
                </label>
            </form>
            { error && <div id="error">{error}</div>}

        </>
    )
}

export default UpdateAccForm;