import React from "react";

function ImageCard({ title, year, price, image }) {


    return (
        <div>
            {<div className="artContainer" >
                <ul>
                    <div className="imageGallery">

                        <div className="cards">
                            <img className="img" src={image} alt={title} />
                            <br></br>
                            <h1 > {title}</h1>
                            <h2> Created In: {year}</h2>
                            <h2>Price: {price}</h2>
                        </div>

                    </div>


                </ul>
            </div >}


        </div >

    )
}
export default ImageCard

