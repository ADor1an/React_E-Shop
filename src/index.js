import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

const application = (
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    application

);


