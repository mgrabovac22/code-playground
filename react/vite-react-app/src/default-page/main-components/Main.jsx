import React from "react";
import './main.css';

import LoginLogo from "./login-component/login";
import RegisterLogo from "./register-component/register";

function Main(){

    return(
        <div id="main">
            <div id="LoginLogo">
                <LoginLogo/>
            </div>
            <div id="RegisterLogo">
                <RegisterLogo/>
                <img id ="hat"src="https://www.freeiconspng.com/thumbs/fedora-png/fedora-hat-transparent-pictures-10.png" width="150" height="120"/>
            </div>
        </div>
    );
}

export default Main;
