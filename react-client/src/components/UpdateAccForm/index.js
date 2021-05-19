import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuthContext } from "../../contexts/auth";

const UpdateAccForm = () => {
    const { refresh } = useAuthContext();

    const [formData, setFormData] = useState({ username: "", password: "" })
    const [error, setError] = useState();
   
    const handleInput = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const formIncomplete = () => Object.values(formData).some(v => !v)

    const handleUpdateAccount = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            await login(formData)
            localStorage.setItem("username", formData.username);
        } catch (err) {
            setLoading(false)
            setError(err)
        }
    }

    return (
        <>
            <form aria-label="update-account" onSubmit={handleUpdateAccount}>
                <label>
                    <input type="username" placeholder="username" name="username" onChange={handleInput} value={formData.username} />
                </label>
                <label>
                    <input type="password" placeholder="password" name="password" onChange={handleInput} value={formData.password} />
                </label>
                <div className="button-container">
                    <button type="submit" className={formIncomplete() ? 'disabled' : 'enabled'} disabled={formIncomplete()}>Update!</button>
                </div>
            </form>
            { error && <div id="error">{error}</div>}

        </>
    )
}

export default UpdateAccForm;