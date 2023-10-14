import React from "react";
import './main.css';


function MainReg(){

    return (
        <div id="MainReg">
            <form id="forma">

                <div class="inputCont">
                    <h2>Enter your name</h2>
                    <div class="inputC">
                        <img class = "icon"src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60"/>
                        <input class="input-field" type="text" placeholder="Name" name="nameInt"/>
                    </div>
                </div>

                <div class="inputCont">
                    <h2>Enter your email</h2>
                    <div class="inputC">
                        <img class = "icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png"width="50" height="60"/>
                        <input class="input-field" type="text" placeholder="Email" name="emailInt"/>
                    </div>
                </div>

                <div class="inputCont">
                    <h2>Enter your password</h2>
                    <div class="inputC">
                        <img class = "icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60"/>
                        <input class="input-field" type="text" placeholder="Password" name="PassInt"/>
                    </div>
                </div>


            </form>
        </div>
    );
}

export default MainReg;