import React from 'react';
import { Link } from 'react-router-dom';
import {Header} from "../Header/Header.jsx";


export const IndexConnected =(props) => {

    return (
        <div>
            <Header title=' '/>
            <div className="column">
                <Link to="/my_cards">SELL</Link>
            </div>
            <div className="column">
                <Link to="/market">BUY</Link>
            </div>
            <div className="column">
                <Link to="/play">PLAY</Link>
            </div>
        </div>
    );
}