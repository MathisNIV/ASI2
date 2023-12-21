import React, { useState, useEffect } from 'react';
import "../../lib/lib/Semantic-UI-CSS-master/semantic.min.css";
import "../../lib/css/custom.css";
import {Chat} from "./Chat";
import {Game} from "./Game";

export const Plateau = () => {
    return (
        <div className="ui grid">
            <div className="eight wide column">
                <Chat />
            </div>
            <div className="eight wide column">
                <Game />
            </div>
        </div>
    );
}
