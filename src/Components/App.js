import React, { useEffect } from 'react'
// import logo from './logo.svg';
import './App.css';

function App() {
  // const [movies, setMovies] = useState('')

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((r) => r.json())
      .then((stuff) => console.log(stuff))
  }, [])


  // const allMovies = movies.map((movie) => {
  //   return (
  //     <div>{movie.image}</div>
  //   )
  // })

  // console.log(allMovies)


  return (
    <div className="App">
      <header className="App-header">
        <img src="LOGO.ico" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
