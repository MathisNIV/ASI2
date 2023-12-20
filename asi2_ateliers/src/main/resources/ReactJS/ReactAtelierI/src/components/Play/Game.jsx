import React, { useState, useEffect } from 'react';
import "../../lib/lib/Semantic-UI-CSS-master/semantic.min.css";
import "../../lib/css/custom.css";
import socketClient  from "socket.io-client";

const socket = socketClient.connect('http://localhost:3001');

export const Game = () => {

    const player = {
        host: false,
        username : "",
        socketId: "",
        roomId: ""
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-6 offset-md-3">

                    <div className="card mb-3" id="user-card">
                        <div className="card-body">
                            <form method="POST" id="form">
                                <label className="col-lg-2">Nom d'utilisateur à changer avec slice </label>
                                <input type="text" className="form-control" id="username" minLength="2" maxLength="20"
                                       placeholder="Saisir votre nom d'utilisateur" required/>
                                    <button className="btn col-lg-2 btn-primary" id="start" type="submit">Join a game</button>
                            </form>

                        </div>
                    </div>

                    <div className="d-none" id="waiting-area">
                        <div className="card mb-3">
                            <div className="card-header">En attente d'un autre joueur</div>
                            <div className="card-body mx-auto">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card d-none" id="game-card">
                        <div className="card-header">
                            GAME PLAY
                        </div>
                    </div>

                    <div className="text-center d-none mt-2" id="quit-area">
                        <input className="btn btn-primary" id="quit" type="button" value="Quit Game" />
                    </div>

                </div>
            </div>
        </div>
    );

}