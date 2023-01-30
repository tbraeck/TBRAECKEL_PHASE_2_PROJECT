import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";


function ImageList() {
    const [art, SetArt] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8000/artwork`)
            .then((r) => r.json())
            .then((data) => SetArt(data))
    }, [])



    return (
        <div>
            {art && art.map((oneArt) => {
                console.log(oneArt)
                return (
                    <ImageCard
                        title={oneArt.title}
                        date={oneArt.date}
                        image={oneArt.imageUrl}

                    />
                )
            })}

            {/* {Array.from(movies).map((movie) => {
                console.log(movie) */}

            <p>image list is here</p>
        </div>


    )
}
export default ImageList

