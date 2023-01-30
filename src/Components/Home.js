import React from 'react'
import NavBar from './NavBar';
import ImageList from './ImageList';
import Header from './Header';
import About from './About';
import Search from './Search';

import { Route, Switch } from 'react-router-dom';
import NewArt from './NewArt';

// import movies from "../data/database.json"


// import Images from './Images';
// import Home from './Home';
// import { Route } from 'react-router-dom';

// import './App.css';

function Home() {

    <img src="http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/on-fire-hair-extensions-portfolio_orig.png" alt="From Above" style={{ width: "1000px" }} />

    return (
        <div className="home">
            <div>
                <Home />
                <Header />
                <NavBar className="navbar" />

                <div>
                    {/* 
                    <Route exact path="/home" >
                        <Home />
                        <Search />
                    </Route > */}
                    {/* <Route path={"/about"}>
                        <About />
                    </Route> */}
                    <Route path={"/artwork"}>
                        <ImageList className="imageList" />
                    </Route >
                    <Route>

                        <NewArt />
                    </Route>


                </div>





            </div>

        </div >
    );
}

export default Home;
