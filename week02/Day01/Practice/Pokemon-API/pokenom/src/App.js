import './App.css';
import React, { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then((response) => response.json())
      .then((datapokemon) => {
        console.log(datapokemon);
        setPokemon(datapokemon.results);
      })
      .catch((errOOOOrrr) => {
        console.log('Got an Error =>', errOOOOrrr);
      });
  };

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemon.map((p, idx) => (
          <li key={idx}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;