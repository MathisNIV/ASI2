import React, { useState, useEffect } from 'react';
import "../../lib/lib/Semantic-UI-CSS-master/semantic.min.css";
import "../../lib/css/custom.css";
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';



export const Game = (props) => {

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

    const socket = props.socket;
    const room = props.room;
    const setRoom = props.setRoom;
    const [ListOfRooms, setListOfRooms] = useState([]);

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

        // console.log("update", current_user)

        socket.emit('createRoom', current_user.login);
        userStart.hidden = true;
        waitingArea.hidden = false;
        setRoom(current_user.login);
    }

    const HandleJoinButtonClick = (e) => {
        e.preventDefault();
        socket.emit('getRooms');
        socket.on('roomsList', (listRooms) => {
            if (listRooms){
                setListOfRooms(listRooms);
            }
            else{
                setListOfRooms([]);
            }
        });
    };

    const ChosenARoom = (roomSelected) => {
        socket.emit('joinRoom', roomSelected);
        gamePlay.hidden = false;
        userStart.hidden = true;
        setListOfRooms(prevRooms => prevRooms.filter(room => room !== roomSelected));
        setRoom(roomSelected);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    <div className="card" id="userStart" hidden={false}>
                        <div className="card-body">
                            <button className="ui button primary col-lg-2" id="start"
                                    onClick={HandleCreationButtonClick}>
                                Create Room
                            </button>
                            <Dropdown className="ui button col-lg-2" onClick={HandleJoinButtonClick}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Select Room
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {ListOfRooms.map((room, index) => (
                                        <div key={index}>
                                            <Dropdown.Item href={`#/room-${index}`} onClick={() => ChosenARoom(room)}>
                                                Room {room}
                                            </Dropdown.Item>
                                        </div>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </div>

                    <div className="d-none" id="waitingArea" hidden={true}>
                        <div className="card mb-3">
                            <div className="card-header">En attente d'un autre joueur</div>
                            <div className="card-body mx-auto">
                                <div className="ui active inline loader"></div>
                            </div>
                        </div>
                    </div>

                    <div className="card d-none" id="gamePlay" hidden={true}>
                        <div className="card-header">GAME PLAY</div>
                    </div>

                    <div className="text-center d-none mt-2" id="quitArea" hidden={true}>
                        <button className="ui button primary" id="quit">Quit Game</button>
                    </div>
                </div>
            </div>
        </div>
    );
}