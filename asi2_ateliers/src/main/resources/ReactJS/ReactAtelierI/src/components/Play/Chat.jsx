import React, { useState, useEffect } from 'react';
import "../../lib/lib/Semantic-UI-CSS-master/semantic.min.css";
import "../../lib/css/custom.css";
import socketClient  from "socket.io-client";
const socket = socketClient.connect('http://localhost:80/socket.io');

export const Chat = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            socket.emit('msg',{
                text:inputValue,
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            })
            setMessages((prevMessages) => [...prevMessages, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div className="chat-container">
            <div className="messages-container">
                <div className="ui segment">
                    {messages.map((msg, index) => (
                        <div className="ui raised segment" key={index}>
                            <a className="ui blue ribbon label">Eric</a>
                            {msg}
                        </div>
                    ))}
                </div>
            </div>
            <form className="ui form" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                />
                <button className='fluid ui right labeled icon button' type="submit"><i className="right arrow icon"></i>Send</button>
            </form>
        </div>
    );
};
