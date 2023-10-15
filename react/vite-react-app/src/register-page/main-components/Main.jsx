import React, { useState } from "react";
import './main.css';
import { Link } from "react-router-dom";



function MainReg(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const[message, setMessage] = useState(null);

    const regLink = "http://localhost:3000/users";

    function inputHandler(event){
        let elementName = event.target.name;

        if(elementName === "nameInt"){
            setName(event.target.value);
        }
        else if(elementName === "emailInt"){
            setEmail(event.target.value);
        }
        else if(elementName === "PassInt"){
            setPassword(event.target.value);
        }
    }

    function buttonHandler(){
        setMessage("");
        let substringEmail = "@";
        let substringEmail1 = ".";

        if(name.length<3){
            setMessage("Your name is too short, it should have minimum 3 characters!");
            return;
        }

        else if(!email.includes(substringEmail) || !email.includes(substringEmail1)){
            setMessage("That is not a valid email!");
            return;
        }
        else if(password.length<8){
            setMessage("Password should contain 8 characters at least");
            console.log(password);
            return;
        }
        else{
            setMessage("");
        }

        let data = {
            Name: name,
            email: email,
            password: password
        }

        fetch(regLink, {
            method: "POST",
            body: JSON.stringify(data)
        }).then((response) => {
            console.log(response);
        });

    }

    return (
        <div id="MainReg">
            <div id="img1Reg">
                <img src="https://cdn.pixabay.com/photo/2013/07/13/12/18/camera-159582_1280.png" height="130" width="150"/>
            </div>
            <div id = "formDiv">
                <p id="errorMess">{message}</p>
                <form>

                    <div class="inputCont">
                        <h2 class ="labelReg">Enter your name</h2>
                        <div class="inputC">
                            <img class = "icon"src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60"/>
                            <input onChange={inputHandler} class="input-field" type="text" placeholder="Name" name="nameInt"/>
                        </div>
                    </div>

                    <div class="inputCont">
                        <h2 class ="labelReg">Enter your email</h2>
                        <div class="inputC">
                            <img class = "icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png"width="50" height="60"/>
                            <input onChange={inputHandler} class="input-field" type="text" placeholder="Email" name="emailInt"/>
                        </div>
                    </div>

                    <div class="inputCont">
                        <h2 class ="labelReg">Enter your password</h2>
                        <div class="inputC">
                            <img class = "icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60"/>
                            <input onChange={inputHandler} class="input-field" type="password" placeholder="Password" name="PassInt"/>
                        </div>
                    </div>

                    <div id="buttonCont">
                        <button onClick={buttonHandler} type="button" id="submitReg">Register</button>
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