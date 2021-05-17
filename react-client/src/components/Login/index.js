import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuthContext } from "../../contexts/auth";

const Login = () => {
    const { login } = useAuthContext();
    const history = useHistory();

    const [formData, setFormData] = useState({ username: "", password: "" })
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const handleInput = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const formIncomplete = () => Object.values(formData).some(v => !v)

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            await login(formData)
            history.push('/home')
        } catch (err) {
            setLoading(false)
            setError(err)
        }
    }

    return (
        <>
            <form aria-label="login" onSubmit={handleLogin}>
                <label>
                    <input type="username" placeholder="username" name="username" onChange={handleInput} value={formData.username} />
                </label>
                <label>
                    <input type="password" placeholder="password" name="password" onChange={handleInput} value={formData.password} />
                </label>
                <div className="button-container">
                    <button type="submit" className={formIncomplete() ? 'disabled' : 'enabled'} disabled={formIncomplete()}>Login</button>
                </div>
            </form>
            { error && <div id="error">{error}</div>}
            { loading && <div id="loading">Logging in . . .</div>}
        </>
    )
}

export default Login;