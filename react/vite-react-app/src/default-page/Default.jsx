import React from 'react';
import './default.css';
import { Link } from 'react-router-dom';

import Header from './header-components/Header';
import Main from './main-components/Main';
import Footer from './footer-components/Footer';

function Default(){

    return(
        <div  id="main">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>

        </div>
    );
}

export default Default;