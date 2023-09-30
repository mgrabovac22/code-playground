import React from 'react';
import './default.css';
import { Link } from 'react-router-dom';

import Header from './header-components/Header';
import Main from './main-components/main';

function Default(){

    return(
        <>
            <Header></Header>
            <Main></Main>
        </>
    );
}

export default Default;