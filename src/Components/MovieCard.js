import React from "react";

function MovieCard({ title, year, runtime, genres, director, image }) {


    return (
        <div>

            <div className="movieCard">
                <div>
                    {title}
                </div>
                <div>
                    {year}
                </div>
                <div>
                    {runtime}
                </div>
                <div>
                    {genres}
                </div>
                <div>
                    {director}
                </div>

                <img src={image} alt={title} />
            </div>

            <h1>movies are here</h1>

        </div>

    )
}
export default MovieCard

