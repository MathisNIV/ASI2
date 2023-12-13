import React from 'react';
import { Link } from 'react-router-dom';


export const IndexPage =(props) => {

    return (
        <div>
            <div className="column">
                <Link to="/cards">Cards</Link>
            </div>
            <div className="column">
                <Link to="/login">Login</Link>
            </div>
            <div className="column">
                <Link to="/register">Register</Link>
            </div>


        </div>
    );
}