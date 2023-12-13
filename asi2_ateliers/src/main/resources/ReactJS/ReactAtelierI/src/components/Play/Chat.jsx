import React from 'react';
import "../../lib/lib/Semantic-UI-CSS-master/semantic.min.css";
import "../../lib/css/custom.css";

export const Chat=(props) =>{

    return(
        <div className="ui segment">
            <div className="ui five column grid">
                <div className="column">
                    <div className="ui segment">
                        <div className="ui top attached label">
                            <div className="ui two column grid">
                                <div className="column">Chat</div>
                                <div className="ui two column grid">
                                    <div className="column">Eric Smith</div>
                                    <div className="column"> <i className="user circle icon"></i></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="ui segment">
                        <div className="ui raised segment">
                            <a className="ui blue ribbon label">Eric</a>
                            <span> 10:00:01</span>
                            <p>good luck!</p>
                        </div>
                        <div className="ui raised segment">
                            <a className="ui green right ribbon label">Me</a>
                            <span> 10:00:02</span>
                            <p>You gonna die!</p>
                        </div>
                        <div className="ui raised segment">
                            <a className="ui blue ribbon label">Eric</a>
                            <span> 10:00:03</span>
                            <p>Not sure</p>
                        </div>
                    </div>
                    <div className="ui form">
                        <div className="field">
                            <textarea rows="2"></textarea>
                        </div>
                    </div>
                    <button className="fluid ui right labeled icon button">
                        <i className="right arrow icon"></i>
                        Send
                    </button>
                </div>
            </div>
        </div>

    )
}
