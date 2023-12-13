import { useState } from "react";
import { update_selected_card } from "../../slices/CardSlice.js";
import { useDispatch } from "react-redux";

export const Card =(props) => {

    const dispatch = useDispatch();
    function handleOnCardSelected(card){
        dispatch(update_selected_card(card));
    }

    return (
        <tr onClick={()=> {handleOnCardSelected(props.card)}}>
            <td>
                {/*<img  className="ui avatar image" src={props.card.img_src} alt={}/>*/}
                <span>{props.card.name} </span>
            </td>
            <td>{props.card.family}</td>
            <td>{props.card.hp}</td>
            <td>{props.card.energy}</td>
            <td>{props.card.defense}</td>
            <td>{props.card.attack}</td>
            <td>{props.card.price}</td>
            <td>
                <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">Sell</div>
                    <div className="visible content">
                        <i className="shop icon"></i>
                    </div>
                </div>
            </td>
        </tr>

    )
}