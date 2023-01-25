import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {

    console.log(movies)
    // useEffect(() => {
    //     console.log("useEffect")
    const movieTileList = movies.map(movie => (
        <MovieCard
            title={movie.name}
            year={movie.year}
            key={movie.name}
            runtime={movie.runtime}
            genres={movie.runtime.map(genre => (
                <ul>{genre}</ul>
            ))}

            director={movie.director}
            image={movie.posterUrl}
        />

    ))
    return (
        <div>
            <ul>
                {movieTileList}
            </ul>
        </div >
    )
}
export default MovieList

