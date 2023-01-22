import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import MoviePage from './MoviePage';
import { Route, Switch } from 'react-router-dom';

// import './App.css';

function App() {
  const [movies, setMovies] = useState('')



  useEffect(() => {
    fetch(`  http://localhost:3000/genres`)
      .then((r) => r.json())
      .then(setMovies(movies))
  }, [])


  // setCats(cats)

  // const allMovies = movies.map((movie) => {
  //   return (
  //     <div>{movie.image}</div>
  //   )
  // })

  // console.log(allMovies)


  return (
    <div className="App">
      <NavBar className="navbar" movies={movies} />
      <MoviePage movies={movies} />

      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/directors">
        <Directors />
      </Route>
      <Route path="/actors">
        <Actors />
      </Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <header className="App-header">
        <img src="https://miro.medium.com/max/1400/1*zjlJFYv8KSDyKtYfVD19HA.webp " className="App-logo" alt="logo" style={{ width: "300px" }} />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

    </div>
  );
}

export default App;
