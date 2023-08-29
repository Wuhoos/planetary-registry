import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry({planetList, submitNewPlanet, handleSearchPlanet, searchPlanet}) {

    
    return(
        <div className="registry">
            <Search handleSearchPlanet={handleSearchPlanet} searchPlanet={searchPlanet} />
            <div className="content">
                <PlanetList planetList={planetList}  />
                <NewPlanetForm submitNewPlanet={submitNewPlanet} />
            </div>
        </div>
    )
}

export default Registry;