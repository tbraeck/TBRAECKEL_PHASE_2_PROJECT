import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

// import React, { useState, useEffect } from "react";
// import NewPlantForm from "./NewPlantForm";
// import PlantList from "./PlantList";
// import Search from "./Search";



function MoviePage() {
    const [movies, setMovies] = useState([]);
    // const [searchMovie, setSearchMovie] = useState("");


    useEffect(() => {
        fetch("http://localhost:3000/")
            .then((r) => r.json())
            .then((data) => (
                console.log(data))
            )
    }, [])
    // const addNewMovie = (myMovie) => {
    //     setMovies([...movies, myMovie])
    // }

    // const updateSearch = (searchInput) => {
    //     setSearchMovie(searchInput)
    // }

    // let filteredPlants = plants.filter((plant) => (
    //     plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
    // )

    let theMovies = setMovies(movies)

    // movies.filter((movie) => (
    //     movie.name.toLowerCase().includes(searchMovie.toLowerCase())
    // ))


    return (

        <main>
            <h1>Movies are here</h1>
            {/* <NewPlantForm addNewPlant={addNewPlant} /> */}
            {/* <Search searchMovie={searchMovie} /> */}
            <MovieList movies={theMovies} />
        </main>
    )
}
export default MoviePage