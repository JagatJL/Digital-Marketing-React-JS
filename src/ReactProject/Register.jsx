import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [users,setUsers]=useState([]);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:5000/users')
    .then((response)=>{
  setUsers(response.data);
    })
    .catch((error)=>{
      setError('Data not fetched');
    });
},[]);

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const existingUser=users.find((user)=> user.email===email)
    
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }

    if(existingUser){
      setError("The user already exists");
      return;
    }
    


    const newUser = {username,email,password};
    try {
      await axios.post('http://localhost:5000/users', newUser);  // Sending POST request to add the user to db.jso
      setSuccess('Registration successful');
      navigate('/login')  
      setError('');
    } catch (err) {
      setError('Error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="registerbox">
      <form onSubmit={handleRegister}>
        <h1>REGISTER</h1>
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <MdEmail className="icon" />
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
            <input type="checkbox" required />I agree to the terms and conditions
          </label>
        </div>

        <button type="submit">Register</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}

        <div className="registerlink">
          <br />
          <br />
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
