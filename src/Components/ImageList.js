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
        <div className="imagelist">
            {art && art.map((oneArt) => {
                console.log(oneArt)

                return (
                    <ImageCard
                        key={oneArt.title}
                        title={oneArt.title}
                        year={oneArt.year}
                        image={oneArt.imageUrl}

                    />
                )
            })}

        </div>


    )
}
export default ImageList

