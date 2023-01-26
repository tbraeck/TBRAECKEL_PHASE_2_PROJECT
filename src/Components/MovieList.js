import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";


function MovieList() {
    const [movies, setMovies] = useState('')

    useEffect(() => {
        fetch(``)
            .then((r) => r.json())
            .then(setMovies)
    }, [])

    return (
        <div>
            {Array.from(movies).map((movie) => {
                console.log(movie)

                // return (
                //     // <MovieCard
                //     // movies={allMovies}
                //     //     title={movie.name}
                //     //     year={movie.year}
                //     //     key={movie.name}
                //     //     runtime={movie.runtime}
                //     //     // genres={movie.runtime.map(genre => (
                //     //     //     <ul>{genre}</ul>
                //     //     // ))}

                //     //     director={movie.director}
                //     //     image={movie.posterUrl}
                //     // />
                //     <p>Movie card lives here</p>
                // )
            })}
        // </div>
    )
}
export default MovieList

