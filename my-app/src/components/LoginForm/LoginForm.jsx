import React, {useState} from "react";
import './LoginForm.css';
import {FaUser, FaLock } from "react-icons/fa";
import icon from "../../assets/icon.jpg"
import {login} from "../../services/authService"
import { useNavigate } from 'react-router-dom';

const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

     // Handle input changes
     const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Log username and password
        try{
            const response = await login(username, password)
            if (response.success) {
                alert(response.message)
                setSuccess(response.message);
                setError(null);
                navigate('/dashboard');
                // Proceed with what to do after successful login (e.g., redirect or store session)
              } else {
                alert(response.message)
                setError(response.message);
                setSuccess(null);
              }
        }
        catch(e){
            setError('Error occured' + e.message);
        }
    };

    return (
        <div className='wrapper'>
            <div className="login-view">
                <div>
                <img src={icon} style={{height: '300px'}} alt="dog-icon"></img>
                </div>
            </div>
            <div className="input-view">

            <div>

<h1>Login</h1>
</div>
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