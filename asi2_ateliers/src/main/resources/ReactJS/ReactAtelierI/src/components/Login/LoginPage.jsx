import React, { useState } from 'react';
import { update_selected_user } from "../../slices/UserSlice.js";
import { useDispatch } from "react-redux";
import {update_selected_card} from "../../slices/CardSlice.js";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setloginError] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  function handleOnUserSelected(id){
    dispatch(update_selected_user(id));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username: username,
      password: password
    };
    fetch('http://localhost:80/users-api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {

        throw new Error('Login failed');
      }
    })
    .then(data => {
      console.log('Success:', data);
      handleOnUserSelected(data);
      navigate('/index');
      setUsername('');
      setPassword('');
    })
    .catch((error) => {
      console.error('Error:', error);
      setloginError('Wrong username or passeword');
    });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} >
        <div className="column">
          <label>
            <span className="col-sm-5">Username: </span>
            <input className="col-sm-5" type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
        </div>
        <div className="column">
          <label>
            <span className="col-sm-5"> Password:</span>
            <input className="col-sm-5" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          </label>
        </div>
        <div className="column">
          <input type="submit" value="Connect"/>
        </div>
      </form>
      <p style={{color: 'red'}}>{loginError}</p>
    </div>
  );
}

export default LoginPage;