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
            </div>
        </div>
    );
}

export default Main;
