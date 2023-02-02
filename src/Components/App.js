import React from 'react'
import Home from './Home';
import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import ImagePage from './ImagePage';
import { Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">


      <div className='homeContainer'>

        <div className="home">
          <div>

            <Header />
            <NavBar className="navbar" />

            <div>

              <Route exact path="/home" >
                <Home />
              </Route >
              <Route path={"/about"}>
                <About />
              </Route>
              <Route path={"/artwork"}>
                <ImagePage className="imagePage" />
              </Route >
              {/* <Route path={"/newart"}>
                  <NewArt className="newart" />
                </Route> */}


            </div>

          </div>

        </div >
      </div>

    </div >

  );
}

export default App;
