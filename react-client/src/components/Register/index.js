import React, { useState, useContext } from 'react'
import { useAuthContext } from "../../contexts/auth"
import { useHistory } from 'react-router-dom';

const Register = () => {
    const { register, login } = useAuthContext();
    const history = useHistory();

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        passwordConfirmation: ""
    })
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const handleInput = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    const formIncomplete = () => Object.values(formData).some(v => !v) || passwordNoMatch();
    const passwordNoMatch = () => formData.password !== formData.passwordConfirmation;

    
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const registerData = formData
            delete registerData.passwordConfirmation
            await register(formData)
            alert('registered! please login')
            history.push('/login')
        } catch (err) {
            setLoading(false)
            setError(err)
        }
    }

    return (
        <>
        <form aria-label="register" onSubmit={handleRegister}>
            <label>
                <input type="text" name="email" value={formData.email} onChange={handleInput} placeholder="email" />
            </label>
            <label>
                <input type="text" name="username" value={formData.username} onChange={handleInput} placeholder="username" />
            </label>
            <label>
                <input type="password" name="password" value={formData.password} onChange={handleInput} placeholder="password" />
            </label>
            <label>
                <input type="password" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleInput} placeholder="confirm password" />
            </label>
            <div className="button-container">
                <button type="submit" className={formIncomplete() ? 'disabled' : 'enabled'} disabled={formIncomplete()}>Register</button>
            </div>
        </form>
        { error && <div id="error">{error}</div> }
        { loading && <div id="loading">Creating account . . .</div> }
        </>
    )
}

export default Register;