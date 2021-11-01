import React, { Component } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Header />
            <Main />
            <Footer />
        </Router>
    );
};
 
export default App;