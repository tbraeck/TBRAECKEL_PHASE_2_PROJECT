import React from 'react'
import NavBar from './NavBar';
import ImageList from './ImageList';
import Header from './Header';

// import movies from "../data/database.json"


// import Images from './Images';
// import Home from './Home';
// import { Route } from 'react-router-dom';

// import './App.css';

function Home() {

    return (
        <div className="App">
            <Header />
            <NavBar className="navbar" />
            <ImageList className="imageList" />
            <img src="http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/on-fire-hair-extensions-portfolio_orig.png" alt="From Above" style={{ width: "600px" }} />
            <div id="foo" />
        </div >
    );
}

export default Home;
