import React from "react";
import './main.css';
import { Link } from "react-router-dom";


function MainReg(){

    return (
        <div id="MainReg">
            <div id="img1Reg">
                <img src="https://cdn.pixabay.com/photo/2013/07/13/12/18/camera-159582_1280.png" height="130" width="150"/>
            </div>
            <div id = "formDiv">
                <form>

                    <div class="inputCont">
                        <h2 class ="labelReg">Enter your name</h2>
                        <div class="inputC">
                            <img class = "icon"src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60"/>
                            <input class="input-field" type="text" placeholder="Name" name="nameInt"/>
                        </div>
                    </div>

                    <div class="inputCont">
                        <h2 class ="labelReg">Enter your email</h2>
                        <div class="inputC">
                            <img class = "icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png"width="50" height="60"/>
                            <input class="input-field" type="text" placeholder="Email" name="emailInt"/>
                        </div>
                    </div>

                    <div class="inputCont">
                        <h2 class ="labelReg">Enter your password</h2>
                        <div class="inputC">
                            <img class = "icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60"/>
                            <input class="input-field" type="text" placeholder="Password" name="PassInt"/>
                        </div>
                    </div>

                    <div id="buttonCont">
                        <button type="button" id="submitReg">Register</button>
                    </div>

                    <div id="backLinkRegCont">
                        <Link to="/" id="LinkBackReg">Go back</Link>
                    </div>

                </form>
            </div>
            <div id="img2Reg">
                <img src="https://static.vecteezy.com/system/resources/previews/024/098/186/original/cinema-film-tape-reel-free-png.png"  height="100" width="130"/>
            </div>
        </div>
    );
}

export default MainReg;