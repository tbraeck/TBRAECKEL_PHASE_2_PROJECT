import React, { useState } from "react";

function Search() {
    const [searchInput, setSearchInput] = useState("")

    function handleChange(e) {
        e.preventDefault();
        setSearchInput(e.target.value)
    }
    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Search Artwork Here"
                onChange={handleChange}
                value={searchInput} />
        </div>
    )
}

export default Search;