import React from "react";

function Search({ searchTerm, onSearchChange }) {


    return (
        <div className="searchWrap">
            <div className="search">
                <input
                    type="text"
                    id="search"
                    className="searchTerm"
                    placeholder="Search Artwork Here"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)} />


            </div>
        </div >
    )
}

export default Search;