import React from "react"
import Planet from "./Planet"

function PlanetList({planetList}) {
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetList.map(planet => {
                    return <Planet planet={planet} key={planet.id} /> 
                })}
            </tbody>
        </table>
    );
}

export default PlanetList;