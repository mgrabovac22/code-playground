import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

function RegisterLogo(){

    return(
        <div className="container">
            <img src="https://cdn.pixabay.com/photo/2014/04/03/11/07/clapperboard-311792_640.png"width="150" height="150" className="image"/>
            <Link to="/register" className="link">
                Register
            </Link>
        </div>
    );
}

export default RegisterLogo;