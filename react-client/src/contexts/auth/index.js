import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from 'axios';

const AuthContext = React.createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(getCurrentUser());
    const history = useHistory();

    function getCurrentUser() {
        let user
        let token = localStorage.getItem("token");
        if(token){ 
            user = jwt_decode(token)
        }
        return user
    }

    const register = userData => {
        return new Promise(async (resolve, reject) => {
            try {
                const options = {
                    headers: { 'Content-Type': 'application/json' }
                }
                const { data } = await axios.post(`${process.env.API_URL}/api/users/register/`, userData, options)
                if (data.err){
                    throw Error(data.detail)
                }
                resolve('Registration successful')
            } catch (err) {
                reject(`Registration Error: ${err}`);
            }
        })
    }

    const login = userData => {
        console.log(userData)
        return new Promise(async (resolve, reject) => {
            try {
                const options = {
                    headers: { 'Content-Type': 'application/json' }
                }
                const { data } = await axios.post(`${process.env.API_URL}/api/users/login/`, userData, options)
                if (!data.access) { 
                    throw new Error(`Login not authorised: ${data.detail}`);
                }
                localStorage.setItem("token", data.access);
                localStorage.setItem("refresh", data.refresh)
                const user = jwt_decode(data.access);
                setCurrentUser(user);
                resolve('Login successful')
            } catch (err) {
                reject(`Login Error: ${err}`);
            }
        })
    }

    const logout = () => {
        localStorage.clear();
        setCurrentUser(null);
        history.push('/login')
    }

    const auth = { register, login, logout, currentUser }

    return (
        <AuthContext.Provider value={auth}>
            { children }
        </AuthContext.Provider>
    )
}
