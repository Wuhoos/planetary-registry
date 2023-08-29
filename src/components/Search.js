import React from "react"

function Search({handleSearchPlanet, searchPlanet}) {
    return (
        <div>
            <input type="text" onChange={handleSearchPlanet} value={searchPlanet} placeholder="Search..."/>
        </div>
    );
}

export default Search;