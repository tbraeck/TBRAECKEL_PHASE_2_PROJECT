import React from "react";

function MovieCard({ title, year, runtime, genres, director, image }) {


    return (
        <div>

            <div className="complete">
                <h1> {title}</h1>
                <h2> {year}</h2>
                <h2>  {runtime} </h2>
                <p>{genres}</p>
                <p> {director}</p>
                <img src={image} alt={title} />
            </div>

            <h1>movies are here</h1>

        </div>

    )
}
export default MovieCard

