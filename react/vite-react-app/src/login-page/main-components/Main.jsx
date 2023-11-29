import React, { useState } from "react";
import './main.css';
import { Link } from "react-router-dom";



function MainLog(){
    

    return (
        <div id="MainLog">
            <div id="img1Log1">
                <img src="https://cdn.pixabay.com/photo/2013/07/13/12/18/camera-159582_1280.png" height="130" width="150"/>
            </div>
            <div id = "formDiv">
                
                <form>

                    <div class="inputCont">
                        <h2 class ="labelLog">Enter your email</h2>
                        <div class="inputR">
                            <img class = "icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png"width="50" height="60"/>
                            <input class="input-field" type="text" placeholder="Email" name="emailInt"/>
                        </div>
                    </div>

                    

                    <div class="inputCont">
                        <h2 class ="labelLog">Enter your password</h2>
                        <div class="inputR">
                            <img class = "icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60"/>
                            <input class="input-field" type="password" placeholder="Password" name="PassInt"/>
                        </div>
                    </div>

                    <div id="buttonCont">
                        <button type="button" id="submitLog">Login</button>
                    </div>


                </form>
                    <div id="checkingAcc">
                        <p>Don't have an account? </p>
                        <div id="backLinkLog">
                        <Link to="/register" id="LinkBackLog">Register</Link>
                        </div>
                    </div>
            </div>
            <div id="img2Log1">
                <img src="https://static.vecteezy.com/system/resources/previews/024/098/186/original/cinema-film-tape-reel-free-png.png"  height="100" width="130"/>
            </div>
        </div>
    );
}

export default MainLog;