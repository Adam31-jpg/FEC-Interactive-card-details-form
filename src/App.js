import logo from './logo.svg';
import './App.scss';
import imageBG from "./images/bg-main-desktop.png"
import imageFront from "./images/bg-card-front.png"
import imageBack from "./images/bg-card-back.png"
import {Submit} from "./Submit"
import {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Context from "./Context/Context";



function App() {

    return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Context />} />
                </Routes>
            </Router>

    );
}

export default App;
