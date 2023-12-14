import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New user ' + username + ' created with mail: ' + email);
    const user = {
      login: username,
      email: email,
      pwd: password
    };
    fetch('http://localhost:80/users-api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      navigate('/login');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    setUsername('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="column">
          <label>
            <span className="col-sm-5">Username: </span>
            <input className="col-sm-7" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
          </label>
        </div>
        <div className="column">
          <label>
            <span className="col-sm-5"> Password:</span>
            <input className="col-sm-7" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          </label>
        </div>
        <div className="column">
          <label>
            <span className="col-sm-5">E-mail: </span>
            <input className="col-sm-7" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </label>
        </div>
        <div className="column">
          <input type="submit" value="Save Account"/>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;