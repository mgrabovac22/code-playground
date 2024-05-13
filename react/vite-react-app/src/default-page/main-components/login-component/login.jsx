import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function LoginLogo(){

    return(
        <div className="container">
            <img src="https://cdn.pixabay.com/photo/2014/04/03/11/07/clapperboard-311792_640.png"width="150" height="150" className="image"/>
            <Link to="/login" className="link">
                Login
            </Link>
        </div>
    );
}

export default LoginLogo;