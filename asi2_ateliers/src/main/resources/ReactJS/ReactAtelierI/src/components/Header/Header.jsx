import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {current} from "@reduxjs/toolkit";

export const Header=(props) =>{

    let current_user_id = useSelector(state => state.userReducer.current_user);
    const [current_user, setCurrent_user] = useState(null);

    const string = 'http://localhost:80/users-api/user/'+current_user_id;
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(string)
            .then(response => response.json())
            .then(data => setCurrent_user(data));
        // empty dependency array means this effect will only run once
    }, [current_user_id]);

    if(current_user == null){
        return (<div></div>)
    }
    else{
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand h1">{props.title}</span>
                <span className="navbar-brand h3">User : {current_user.login}</span>
                <span className="navbar-brand h3">Money : {current_user.account}</span>
            </nav>
        )
    }
}
