import React from "react";

function ImageCard({ title, date, image }) {


    return (
        <div>
            {<div className="artcard">
                <p>This is where imagecard is</p>
                <h1> {title}</h1>
                <h2> {date}</h2>
                <img src={image} alt={title} />
            </div>}

            <h1>Images are here</h1>

        </div>

    )
}
export default ImageCard

