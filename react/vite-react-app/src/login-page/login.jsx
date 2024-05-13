import React from 'react';
import './login.css';

import HeaderLog from './header-components/Header';
import MainLog from './main-components/Main';
import FooterLog from './footer-components/Footer';

function Login(){

    return(
        <>
            <HeaderLog></HeaderLog>
            <MainLog></MainLog>
            <FooterLog></FooterLog>

        </>
    );
}

export default Login;