import React, { useState, useEffect } from 'react';
import "../../lib/lib/Semantic-UI-CSS-master/semantic.min.css";
import "../../lib/css/custom.css";
import {useSelector} from "react-redux";

export const Chat = (props) => {

    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [current_user, setCurrent_user] = useState(null);
    const socket = props.socket

    let current_user_id = useSelector(state => state.userReducer.current_user);
    const string = 'http://localhost:80/users-api/user/'+current_user_id;

    useEffect(() => {
        fetch(string)
            .then(response => response.json())
            .then(data => setCurrent_user(data))
        socket.on('msg' , (msg) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: msg.text,
                    username: msg.username,
                }
            ]);        } )

        return () => {
            socket.off('msg')
        }
    }, []);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            socket.emit('msg', {
                text: inputValue,
                socketId: socket.id,
                userId: current_user.id,
                username: current_user.login,
            });
            console.log(current_user.login)
            setInputValue('');
        }

    };

    const handleGetUsers = () => {
        socket.emit('getUsers');
    };


    return (
        <div className="ui center aligned segment chat-container">
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
            <form className="ui form center aligned" onSubmit={handleFormSubmit}>
                <div className="ui action input">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button className='ui button' type="submit">Send</button>
                    <button className='ui button' onClick={handleGetUsers}>Get Users</button>
                </div>
            </form>
        </div>
    );
};
