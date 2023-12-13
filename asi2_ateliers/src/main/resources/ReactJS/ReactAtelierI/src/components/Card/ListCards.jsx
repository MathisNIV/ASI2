import React from 'react';
import {Card} from "./Card.jsx";
export const ListCards=(props) =>{
    let listCards = props.cardsList.map(
        (card) => (
            <tbody key={card.id} >
                <Card
                    card = {card}
                />
            </tbody>


        )
    )

    return(
        <div>
            <table className="ui selectable celled table" id="cardListId">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Family</th>
                        <th>HP</th>
                        <th>Energy</th>
                        <th>Defence</th>
                        <th>Attack</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                {listCards}
            </table>
        </div>



    )
}
