import React, { useState, useEffect } from "react";
import ImageList from './ImageList';
import Search from "./Search";
import NewArt from './NewArt';

function ImagePage() {
    const [art, setArt] = useState([])
    // const [searchArt, setSearchArt] = useState('')

    useEffect(() => {
        fetch(`http://localhost:8000/artwork`)
            .then((r) => r.json())
            .then(setArt)
    }, [])
    // console.log(art)

    function addNewArt(myArt) {
        setArt([...art, myArt]);
        // console.log(myArt)
    }

    // function handleUpdatedArt(updatedArt) {

    // }
    return (
        <div>

            <Search />
            {/* searchArt={searchArt} onSearchChange={setSearchArt} */}
            <NewArt addNewArt={addNewArt} />
            {/* onAddArt={handleAddArt} */}

            <ImageList art={art} />


        </div>
    )
}

export default ImagePage;