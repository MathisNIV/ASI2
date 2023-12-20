import React, { useState, useEffect } from 'react';
import "../../lib/lib/Semantic-UI-CSS-master/semantic.min.css";
import "../../lib/css/custom.css";
import socketClient  from "socket.io-client";
import {useSelector} from "react-redux";
const socket = socketClient.connect('http://localhost:3000');

export const Chat = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [current_user, setCurrent_user] = useState(null);

    let current_user_id = useSelector(state => state.userReducer.current_user);
    const string = 'http://localhost:80/users-api/user/'+current_user_id;

    useEffect(() => {
        fetch(string)
            .then(response => response.json())
            .then(data => setCurrent_user(data))
        socket.on('msg' , (msg) => {
            console.log(
                msg
            )
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: msg.text,
                }
            ]);        } )

        return () => {
            socket.off('msg')
        }
    }, []);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '' && current_user) {
            socket.emit('msg', {
                text: inputValue,
                socketID: socket.id,
                userId: current_user.id,
                username: current_user.login,
            });
            setInputValue('');
        }
    };

    const handleGetUsers = () => {
        socket.emit('getUsers');
    };


    return (
        <div className="chat-container">
            <div className="messages-container">
                <div className="ui segment">
                    {messages.map((msg, index) => (
                        <div className="ui raised segment" key={index}>
                            <a className="ui blue ribbon label">{msg.username}</a>
                            {msg.text}
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
                <button className='fluid ui right labeled icon button' onClick={handleGetUsers}>Get Users</button>
            </form>
        </div>
    );
};
