import React from 'react';
import { Link } from 'react-router-dom';


const Index = () => (
    <div>
      <Link to="/cards">Cards</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
);

export default Index;