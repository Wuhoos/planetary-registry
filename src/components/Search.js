import React from "react"

function Search({searchPlanets, updateSearchPlanet}) {
    return (
        <div>
            <input type="text" value={searchPlanets} onChange={updateSearchPlanet} placeholder="Search..."/>
        </div>
    );
}

export default Search;