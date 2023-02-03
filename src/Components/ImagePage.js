import React, { useState, useEffect } from "react";
import ImageList from './ImageList';
import Search from "./Search";
import NewArt from './NewArt';

function ImagePage() {
    const [art, setArt] = useState([])
    const [searchArt, setSearchArt] = useState('')

    useEffect(() => {
        fetch(`http://localhost:8000/artwork`)
            .then((r) => r.json())
            .then(artArray => setArt(artArray))
    }, [])
    // console.log(art)

    function addNewArt(myArt) {
        setArt([...art, myArt])
        // console.log(myArt)
    }

    function handleUpdatedArt(updatedArt) {
        const updatedArtArray = art.map((oneArt) => {
            if (oneArt.id === updatedArt.id) {
                return updatedArt;
            } else {
                return art;
            }
        });
        setArt(updatedArtArray)
    }

    const displayedArt = art.filter((oneArt) => {
        return oneArt.title.toLowerCase().includes(searchArt.toLowerCase())
    })

    return (
        <div>

            <Search searchArt={searchArt} onSearchChange={setSearchArt} />
            <NewArt addNewArt={addNewArt} />
            <ImageList art={displayedArt} onUpdateArt={handleUpdatedArt} />


        </div>
    )
}

export default ImagePage;