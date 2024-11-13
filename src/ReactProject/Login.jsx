import React, { useState, useEffect } from "react";
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then((response) => {
        setUsers(response.data); 
        
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

   
    const user = users.find((u) => u.username === username);

    if (!user) {
      setError('User does not exist');
    } else if (user.password !== password) {
      setError('Password is incorrect');
    } else {
      setError('');
      alert('Login successful');
      navigate('/home')
    }
  };

  return (
    <div className="loginbox">
      <form onSubmit={handleLogin}>

        <h1>LOGIN</h1>

        <div className="inputbox">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>

        <div className="inputbox">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>

        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

        <div className="registerlink">
          <br /><br />
          <p> Don't have an account? <Link to="/register"> Register</Link> </p>
        </div>

      </form>
    </div>
  );
};

export default Login;
