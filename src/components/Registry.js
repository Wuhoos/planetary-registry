import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry({planets, submitNewPlanets, searchPlanets, updateSearchPlanet}) {

    return(
        <div className="registry">
            <Search searchPlanets={searchPlanets} updateSearchPlanet={updateSearchPlanet}/>
            <div className="content">
                <PlanetList planets= {planets}/>
                <NewPlanetForm submitNewPlanets={submitNewPlanets} />
            </div>
        </div>
    )
}

export default Registry;