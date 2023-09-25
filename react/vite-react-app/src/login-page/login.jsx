import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login(){

    return(
        <>
            <p>This is login</p>
            <Link to="/register">Go to register</Link>

        </>
    );
}

export default Login;