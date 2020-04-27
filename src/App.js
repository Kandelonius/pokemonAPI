import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeList from "./PokemonList";
import CapturedPokemon from './CapturedPokemon';
import './App.css';

const url = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [page, setPage] = useState(1)
  const [characterData, setCharacterData] = useState([])
  useEffect(() => {
    axios.get(`${url}?page=${page}`)
    .then(res =>{
      console.log(res.data.next)
      setCharacterData(res.data.results)
      debugger
    })
    .catch(err => {
      console.log(err)
      debugger
    })
    },
  [page]);
  return (
    <div className="App">
      <header className="App-header">
        {characterData.map((event) => <PokeList key={event.name} character={event}/>)}
        <CapturedPokemon />
      </header>
    </div>
  );
}

export default App;
