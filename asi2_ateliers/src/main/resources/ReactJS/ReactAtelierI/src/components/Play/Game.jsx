import React, { useState, useEffect } from 'react';
import "../../lib/lib/Semantic-UI-CSS-master/semantic.min.css";
import "../../lib/css/custom.css";
import socketClient  from "socket.io-client";
import { useSelector } from 'react-redux';

const socket = socketClient.connect('http://localhost:3000');

export const Game = () => {

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

    const userStart = document.getElementById('userStart');
    const gamePlay = document.getElementById('gamePlay');
    const waitingArea = document.getElementById('waitingArea');
    const quitArea = document.getElementById('quitArea');

    const HandleCreationButtonClick = (e) => {
        e.preventDefault();

        // Modify the current_user information host, turn, win
        // console.log("avant", current_user);
        // (async () => {
        //     const requestOptions = {
        //         method: 'PUT',
        //         headers: { 'Content-Type': 'application/json'},
        //         body: JSON.stringify({ ...current_user, host: true }),
        //     };
        //     const response = await fetch(string, requestOptions);
        //     const data = await response;
        //     setCurrent_user(data);
        // })();

        socket.emit('createRoom', current_user.login);
        userStart.hidden = true;
        waitingArea.hidden = false;
        console.log("update", current_user)

    };

    const HandleJoinButtonClick = (e) => {
        e.preventDefault();
        socket.emit('getRooms');
    };


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-6 offset-md-3">

                    <div className="card mb-3" id="userStart" hidden={false}>
                        <div className="card-body">
                            <button className="btn col-lg-2 btn-primary" id="start" onClick={HandleCreationButtonClick}>
                                Create Room
                            </button>
                            <button className="btn col-lg-2 btn-primary" id="start" onClick={HandleJoinButtonClick}>
                                Join Room
                            </button>

                        </div>
                    </div>

                    <div className="d-none" id="waitingArea" hidden={true}>
                    <div className="card mb-3">
                            <div className="card-header">En attente d'un autre joueur</div>
                            <div className="card-body mx-auto">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card d-none" id="gamePlay" hidden={true}>
                        <div className="card-header">
                            GAME PLAY
                        </div>
                    </div>

                    <div className="text-center d-none mt-2" id="quitArea" hidden={true}>
                        <input className="btn btn-primary" id="quit" type="button" value="Quit Game" />
                    </div>

                </div>
            </div>
        </div>
    );

}