import React from 'react';
import { useSelector } from 'react-redux';
import "../../lib/lib/Semantic-UI-CSS-master/semantic.min.css"
import "../../lib/css/custom.css"


export const DetailCard =(props)=>{

    let current_card = useSelector(state => state.cardReducer.current_card);

    if (Object.keys(current_card).length === 0) {
        return (
            <div></div>
        );
    } else {
        return (
            <div className="ui segment">
                <div className="ui special cards">
                    <div className="card">
                        <div className="content">
                            <div className="ui grid">
                                <div className="three column row">
                                    <div className="column">
                                        <i className="heart outline icon"></i>
                                        <span className="cardHPId">{current_card.hp}</span>
                                    </div>
                                    <div className="column">
                                        <h5>{current_card.family}</h5>
                                    </div>
                                    <div className="column">
                                        <span id="energyId">{current_card.energy}</span>
                                        <i className="lightning icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="image imageCard">
                            <div className="blurring dimmable image">
                                <div className="ui inverted dimmer">
                                    <div className="content">
                                        <div className="center">
                                            <div className="ui primary button">Add Friend</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ui fluid image">
                                    <a className="ui left corner label">{current_card.name}</a>
                                    {/*<img id="cardImgId" className="ui centered image" src={current_card.img_src} alt={}/>*/}

                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="ui form tiny">
                                <div className="field">
                                    <label id="cardNameId"></label>
                                    <textarea id="cardDescriptionId" className="overflowHiden" readOnly={true} rows="5" value={current_card.description}></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <i className="heart outline icon"></i>
                            <span className="cardHPId"> HP {current_card.hp}</span>
                            <div className="right floated ">
                                <span id="cardEnergyId">Energy {current_card.energy}</span>
                                <i className="lightning icon"></i>

                            </div>
                        </div>

                        <div className="content">
                            <span className="right floated">
                                <span id="cardAttackId"> Attack {current_card.attack}</span>
                                <i className=" wizard icon"></i>
                            </span>
                            <i className="protect icon"></i>
                            <span id="cardDefenceId">Defense {current_card.defense}</span>
                        </div>

                        <div className="ui bottom attached button">
                            <i className="money icon"></i>
                            <span id="cardPriceId">Actual Value {current_card.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}