import React from 'react';
import { Link } from 'react-router-dom';


export const IndexPage =(props) => {

    return (
        <div>
            <Link to="/cards">Cards</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}