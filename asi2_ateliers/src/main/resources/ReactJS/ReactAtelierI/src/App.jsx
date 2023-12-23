import { useState } from 'react'
import './App.css'
import {ListCards} from './components/Card/ListCards.jsx';
import '../src/lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import listCardsJSON from '../src/sources/listCardsJSON.json';
import listMarketCardsJSON from '../src/sources/marketCards.json';
import {DetailCard} from "./components/Card/DetailCard.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import {Header} from "./components/Header/Header.jsx";
import {Chat} from "./components/Play/Chat.jsx";
import {IndexPage} from "./components/Index/IndexPage.jsx";
import {IndexConnected} from "./components/Index/IndexConnected.jsx"
import {Game} from "./components/Play/Game.jsx";
import {Plateau} from "./components/Play/Plateau";

function App() {

    const [cardsJSON, setCards] = useState(listCardsJSON);
    const [marketCardsJSON, setCardsMarket] = useState(listMarketCardsJSON)

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<IndexPage />}/>
                <Route exact path="/index" element={<IndexConnected />}/>
                <Route exact path="/my_cards" element={
                    <div className="container-fluid">
                        <Header title="SELL"></Header>
                        <div className="row">
                            <h3>My Cards</h3>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 col-md-5 col-lg-5">
                                <ListCards cardsList={cardsJSON.cards}/>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <div></div>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <DetailCard/>
                            </div>
                        </div>
                    </div>}>
                </Route>

                <Route exact path="/market" element={
                    <div className="container-fluid">
                        <Header title="BUY"></Header>
                        <div className="row">
                            <h3>Market</h3>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 col-md-5 col-lg-5">
                                <ListCards cardsList={marketCardsJSON.cards}/>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <div></div>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4" >
                                <DetailCard />
                            </div>
                        </div>
                    </div>}>
                </Route>

                <Route exact path="/play" element={<Plateau />}/>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;