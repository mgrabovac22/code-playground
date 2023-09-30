import React from 'react';
import './default.css';
import { Link } from 'react-router-dom';

import Header from './header-components/Header';

function Default(){

    return(
        <>
            <Header></Header>
            <p>This is default</p>
            <Link to="/login">Go to login</Link>
            <Link to="/register">Go to register</Link>
        </>
    );
}

export default Default;