import React, { useState } from "react";

function Search({ art }) {
    const [searchInput, setSearchInput] = useState("")

    function handleChange(e) {
        e.preventDefault();
        setSearchInput(e.target.value)
    }

    function displayedImage() {
        art.filter((oneArt) => {
            return (
                oneArt.title.toLowerCase().includes(searchInput.toLowerCase())
            )
        })

    }

    return (
        <div className="searchWrap">
            <div className="search">
                <input
                    type="text"
                    className="searchTerm"
                    placeholder="Search Artwork Here"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput} />
                <button type="submit" className="searchButton"
                    onSubmit={displayedImage}>
                    🔍
                </button>
            </div>
        </div>
    )
}

export default Search;