import React, { useState } from 'react';

const CapturedPokemon = () => {
    const [pokemon] = useState([]);

    return(
        <div className="pokedex">
            <h2>Captured Pokemon</h2>
            {pokemon.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.url}</p>
          <p>{pokemon.name}</p>
        </div>)}
        </div>
    )
}

export default CapturedPokemon;