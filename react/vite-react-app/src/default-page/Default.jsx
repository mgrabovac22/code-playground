import React from 'react';
import './default.css';
import { Link } from 'react-router-dom';

import Header from './header-components/Header';
import Main from './main-components/Main';

function Default(){

    return(
        <div  id="main">
            <Header></Header>
            <Main></Main>
        </div>
    );
}

export default Default;