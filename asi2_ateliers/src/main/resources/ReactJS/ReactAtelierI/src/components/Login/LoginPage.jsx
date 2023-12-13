import React, { useState } from 'react';
import { update_selected_user } from "../../slices/UserSlice.js";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User ' + username + ' successfuly connected');
    setUsername('');
    setPassword('');
    dispatch(update_selected_user(username));
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password: 
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Connect" />
      </form>
    </div>
  );
}

export default LoginPage;