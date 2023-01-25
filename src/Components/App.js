import React from 'react'
import NavBar from './NavBar';
import MoviePage from './MoviePage';
// import Images from './Images';
// import Home from './Home';
// import { Route } from 'react-router-dom';

// import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar className="navbar" />

      <header header className="App-header" >
        <img src="https://miro.medium.com/max/1400/1*zjlJFYv8KSDyKtYfVD19HA.webp " className="App-logo" alt="logo" style={{ width: "300px" }} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MoviePage />
    </div >
  );
}

export default App;
