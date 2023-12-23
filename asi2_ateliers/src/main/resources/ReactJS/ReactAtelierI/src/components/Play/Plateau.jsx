import React, { useState, useEffect } from 'react';
import "../../lib/lib/Semantic-UI-CSS-master/semantic.min.css";
import "../../lib/css/custom.css";
import {Chat} from "./Chat";
import {Game} from "./Game";
import socketClient from "socket.io-client";

const socket = socketClient.connect('http://localhost:3000');

export const Plateau = () => {
    const [room, setRoom] = useState('no room');
    return (
        <div className="ui grid">
            <div className="two wide column">
                <Chat
                    socket = {socket}
                    room = {room}
                    setRoom = {setRoom}
                />
            </div>
            <div className="two wide column">
                <Game
                    socket = {socket}
                    room = {room}
                    setRoom = {setRoom}
                />
            </div>
        </div>
    );
}
