import React from "react";

function ImageCard({ title, year, image }) {


    return (
        <div>
            {<div className="artcontainer" >
                <div className="artcard">
                    <h1> {title}</h1>
                    <h2> Created In: {year}</h2>
                    <img src={image} alt={title} />
                </div>
            </div>}


        </div>

    )
}
export default ImageCard

