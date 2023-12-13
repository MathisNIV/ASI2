import React from 'react';
import { useSelector } from 'react-redux';

export const Header=(props) =>{

    let current_user = useSelector(state => state.userReducer.current_user);

    return(
        <div className="row">
            <div className="col-md-2 col-lg-2">
                {/*<p>{current_user.money}</p>*/}
            </div>
            <div className="col-md-6 col-lg-6">
                <h1>{props.title}</h1>
            </div>
            <div className="col-md-2 col-lg-2">
                {/*<p>{current_user.username}</p>*/}
            </div>
        </div>



    )
}
