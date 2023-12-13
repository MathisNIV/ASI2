import { useState } from 'react'
import './App.css'
import { ListCards } from './components/Card/ListCards.jsx';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import listCardsJSON from './sources/listCardsJSON.json';
import { DetailCard } from "./components/Card/DetailCard.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './components/Index/IndexPage'
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';


function App() {

    const [cardsJSON, setCards] = useState(listCardsJSON);

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<IndexPage />}/>
                <Route exact path="/cards" element={
                    <div className="container-fluid">
                        <div className="row">
                            <h1>My Cards</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6" >
                                <ListCards cardsList={cardsJSON.cards}/>
                            </div>
                            <div className="col-md-6 col-lg-6" >
                                <DetailCard />
                            </div>
                        </div>
                    </div>}>
                </Route>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;