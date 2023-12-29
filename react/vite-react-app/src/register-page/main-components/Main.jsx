import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './main.css';

function MainReg() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
    const regLink = "http://localhost:3000/users";

    const inputHandler = (event) => {
        let elementName = event.target.name;

        if (elementName === "nameInt") {
            setName(event.target.value);
        } else if (elementName === "emailInt") {
            setEmail(event.target.value);
        } else if (elementName === "PassInt") {
            setPassword(event.target.value);
        }
    };

    const routeChange = () => {
        let path = "/movies";
        navigate(path);
    };

    const buttonHandler = () => {
        setMessage("");
        let substringEmail = "@";
        let substringEmail1 = ".";

        if (name.length < 3) {
            setMessage("Your name is too short, it should have a minimum of 3 characters!");
            return;
        } else if (!email.includes(substringEmail) || !email.includes(substringEmail1)) {
            setMessage("That is not a valid email!");
            return;
        } else if (password.length < 8) {
            setMessage("Password should contain at least 8 characters");
            console.log(password);
            return;
        } else {
            setMessage("");
            routeChange();
        }

        let data = {
            Name: name,
            email: email,
            password: password
        };

        let header = new Headers({
            "Content-Type": "application/json"
        });

        fetch(regLink, {
            headers: header,
            method: "POST",
            body: JSON.stringify(data)
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div id="MainReg">
            <div id="img1Reg">
                <img src="https://cdn.pixabay.com/photo/2013/07/13/12/18/camera-159582_1280.png" height="130" width="150" alt="Camera" />
            </div>
            <div id="formDiv">
                <p id="errorMess">{message}</p>
                <form>
                    <div className="inputCont">
                        <h2 className="labelReg">Enter your name</h2>
                        <div className="inputC">
                            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60" alt="Icon" />
                            <input onChange={inputHandler} className="input-field" type="text" placeholder="Name" name="nameInt" />
                        </div>
                    </div>
                    <div className="inputCont">
                        <h2 className="labelReg">Enter your email</h2>
                        <div className="inputC">
                            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60" alt="Icon" />
                            <input onChange={inputHandler} className="input-field" type="text" placeholder="Email" name="emailInt" />
                        </div>
                    </div>
                    <div className="inputCont">
                        <h2 className="labelReg">Enter your password</h2>
                        <div className="inputC">
                            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60" alt="Icon" />
                            <input onChange={inputHandler} className="input-field" type="password" placeholder="Password" name="PassInt" />
                        </div>
                    </div>
                    <div id="buttonCont">
                        <button onClick={buttonHandler} type="button" id="submitReg">Register</button>
                    </div>
                    <div id="loginLinkCont">
                        <p>Already have an account?</p>
                        <div id="backLinkRegCont">
                            <Link to="/login" id="LinkBackReg">Login</Link>
                        </div>
                    </div>
                </form>
            </div>
            <div id="img2Reg">
                <img src="https://static.vecteezy.com/system/resources/previews/024/098/186/original/cinema-film-tape-reel-free-png.png" height="100" width="130" alt="Film Tape Reel" />
            </div>
        </div>
    );
}

export default MainReg;
