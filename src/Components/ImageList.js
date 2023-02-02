import React from "react";
import ImageCard from "./ImageCard";

function ImageList({ art }) {
    return (
        <div>
            <br></br>  <br></br>
            <br></br>
            <ul className="cards" >

                {art.map((oneArt) => {

                    return (
                        <div className="card" >
                            <ImageCard
                                key={oneArt.title}
                                image={oneArt.imageUrl}
                                title={oneArt.title}
                                year={oneArt.year}
                                price={oneArt.price}
                            />
                        </div>


                    )
                })}


            </ul>
        </div>

    )
}
export default ImageList

