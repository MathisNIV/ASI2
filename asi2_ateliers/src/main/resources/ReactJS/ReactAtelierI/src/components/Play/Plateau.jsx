import React, { useState, useEffect } from 'react';
import "../../lib/lib/Semantic-UI-CSS-master/semantic.min.css";
import "../../lib/css/custom.css";
import {Chat} from "./Chat";
import {Game} from "./Game";
import socketClient from "socket.io-client";

const socket = socketClient.connect('http://localhost:3000');

export const Plateau = () => {
    const [room, setRoom] = useState('');
    return (
        <div className="ui grid">
            <div className="col-lg-4">
                <Chat
                    socket = {socket}
                    room = {room}
                    setRoom = {setRoom}
                />
            </div>
            <div className="col-lg-5">
                <Game
                    socket = {socket}
                    room = {room}
                    setRoom = {setRoom}
                />
            </div>
        </div>
    );
}
