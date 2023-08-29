import './App.css';
import Registry from './components/Registry';
import Header from "./components/Header"
import { useState, useEffect } from 'react';

function App() {

  const [searchPlanet, setSearchPlanet] = useState("")
  const [planetList, setPLanetList] = useState([])

  useEffect(() => {
    fetch("http://localhost:8085/planets")
    .then(res => res.json())
    .then(planetList => setPLanetList(planetList))
  }, [])

  const submitNewPlanet = (e) => {
    e.preventDefault()

    const newPlanet ={
      "name": e.target.name.value,
      "climate": e.target.climate.value,
      "terrain": e.target.terrain.value,
      "population": e.target.population.value
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
    .then(newPlanet => setPLanetList([...planetList,newPlanet]))  
  }

  const handleSearchPlanet = event => setSearchPlanet(event.target.value)

  const filteredPlanet = planetList.filter(planet => {
    if(setSearchPlanet === "") {
      return true
    } else {
      return planet.name.toUpperCase().includes(searchPlanet.toUpperCase())
    }
  })


  return (
    <div className="app-container">
      <Header />
      <Registry planetList={filteredPlanet} submitNewPlanet={submitNewPlanet} searchPlanet={searchPlanet} handleSearchPlanet={handleSearchPlanet} />
    </div>
  );
}

export default App;
