import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './main.css';

function MainLog() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const inputHandler = (event) => {
        let elementName = event.target.name;

        if (elementName === "emailInt") {
            setEmail(event.target.value);
        }
        else if (elementName === "PassInt") {
            setPassword(event.target.value);
        }

    };

    const routeChange = () => {
        let path = "/movies";
        navigate(path);
    };

    const loginUser = () => {
        let data = {
            email: email,
            password: password
        };

        let header = new Headers({
            "Content-Type": "application/json"
        });

        fetch("http://localhost:3000/users/login", {
            headers: header,
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.result) {
                setMessage("Login successful!");
                routeChange();
            } else {
                setMessage("Invalid email or password.");
            }
        })
        .catch(error => {
            setMessage("An error occurred while processing your request.");
            console.error('Error:', error);
        });
    };

    return (
        <div id="MainLog">
            <div id="img1Log1">
                <img src="https://cdn.pixabay.com/photo/2013/07/13/12/18/camera-159582_1280.png" height="130" width="150" alt="Camera" />
            </div>
            <div id="formDiv">
                <p id="errorMess">{message}</p>
                <form>

                    <div className="inputCont">
                        <h2 className="labelLog">Enter your email</h2>
                        <div className="inputR">
                            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60" alt="Icon" />
                            <input onChange={inputHandler} className="input-field" type="text" placeholder="Email" name="emailInt" autoComplete="username"/>
                        </div>
                    </div>

                    <div className="inputCont">
                        <h2 className="labelLog">Enter your password</h2>
                        <div className="inputR">
                            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/805/805333.png" width="50" height="60" alt="Icon" />
                            <input onChange={inputHandler} className="input-field" type="password" placeholder="Password" name="PassInt" autoComplete="current-password"/>
                        </div>
                    </div>

                    <div id="buttonCont">
                        <button onClick={loginUser} type="button" id="submitLog">Login</button>
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
                <img src="https://static.vecteezy.com/system/resources/previews/024/098/186/original/cinema-film-tape-reel-free-png.png" height="100" width="130" alt="Film Tape Reel" />
            </div>

        </div>
    );
}

export default MainLog;
