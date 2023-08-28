import './App.css';
import Registry from './components/Registry';
import Header from "./components/Header"
import { useState, useEffect } from 'react';

function App() {

  const [planets, setPlanets] = useState([])
  const [searchPlanets, setSearchPlanets] = useState("")

  useEffect(() => {
    fetch("http://localhost:8085/planets")
    .then(res => res.json())
    .then(planets => setPlanets(planets))
  }, [])

  const submitNewPlanets = event => {
    event.preventDefault()

    const newPlanet = {
      "name" : event.target.name.value,
      "climate": event.target.climate.value,
      "terrain" : event.target.terrain.value,
      "population": event.target.terrain.value
    }

    fetch("http://localhost:8085/planets", {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPlanet)
    })
    .then(res => res.json())
    .then(newPlanet => setPlanets([...planets, newPlanet]))
  }

  const updateSearchPlanet = event => setSearchPlanets(event.target.value)

  const filteredPlanets = planets.filter(planet => {
    if(setSearchPlanets === "") {
      return true 
    } else {
      return planet.name.toUpperCase().includes(searchPlanets.toUpperCase())
    }
  })

  return (
    <div className="app-container">
      <Header />
      <Registry planets={filteredPlanets} searchPlanets={searchPlanets} submitNewPlanets={submitNewPlanets} updateSearchPlanet={updateSearchPlanet} />
    </div>
  );
}

export default App;
