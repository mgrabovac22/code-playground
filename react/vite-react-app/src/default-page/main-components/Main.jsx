import React from "react";
import './main.css';

import LoginLogo from "./login-component/login";
import RegisterLogo from "./register-component/register";

function Main(){

    return(
        <>
            <div id="text1">
                <div className="quote-training">
                    <p className="kopakana">“King Kong ain't got shit on me!”</p>
                    <p className="name">-Training day</p>
                </div>

                <div className="quote-shining">
                    <p className="kopakana">“Here's Johnny!”</p>
                    <p className="name">-The Shining</p>
                </div>

                <div className="quote-gladiator">
                    <p className="kopakana">"What we do in life echoes in eternity."</p>
                    <p className="name">-Gladiator</p>
                </div>

                <div className="quote-godfather">
                    <p className="kopakana">"I'm gonna make him an offer he can't refuse."</p>
                    <p className="name">-Godfather</p>
                </div>

            </div>
            <LoginLogo/>
            <RegisterLogo/>
        </>
    );
}

export default Main;
