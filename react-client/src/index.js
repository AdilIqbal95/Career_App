import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import { AuthProvider } from "./contexts/auth";


import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
            <App />
            </AuthProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'));