import React from 'react'
import NavBar from './NavBar';
import MovieList from './MovieList';
// import movies from "../data/database.json"

// import Images from './Images';
// import Home from './Home';
// import { Route } from 'react-router-dom';

// import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar className="navbar" />
      <MovieList className="movieList" />
    </div >
  );
}

export default App;
