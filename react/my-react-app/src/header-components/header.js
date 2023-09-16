import React from 'react';
import Animation from './animation.js';
import NavBar from './nav-bar.js';
import './header.css';


function Header(){
    return(
        <div id= "header">
            <div class ="djeloviHeadera">
                <Animation></Animation>
            </div>
            <div class ="djeloviHeadera">
                <h1>E-pisma</h1>
            </div>
            <div class = "djeloviHeadera">
                <NavBar></NavBar>
            </div>
        </div>
    )
}
export default Header;