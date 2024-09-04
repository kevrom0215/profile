import React, {useState} from "react";
import './LoginForm.css';
import {FaUser, FaLock } from "react-icons/fa";
import header from "../../assets/header.jpeg"

const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

     // Handle input changes
     const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Log username and password
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <div className='wrapper'>
            <div className="login-view">
                <h1>Login</h1>
            </div>
            <div className="input-view">
            {/* <img src={header} id="login-banner" alt="shiba header"/> */}
            <div className="input-box">
                <input type="text" placeholder="Username" value={username}
                        onChange={handleUsernameChange} required></input>
                
            </div>
            <div className="input-box">
            <input type="password" placeholder="Password" value={password}
                        onChange={handlePasswordChange} required></input>
            {/* <FaLock/> */}
            {/* <div className="remember-forgot">
                
                
            </div> */}
            <div className="buttons">
            <button type="submit" onClick={handleSubmit}>
                <h4>Login</h4>
            </button>
            </div>
            
            </div>
            </div>
            
        </div>
    )
}

export default LoginForm;