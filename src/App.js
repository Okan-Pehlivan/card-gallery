
import React, { useState } from "react";
import Box from "./Box";
import BigBox from "./BigBox";
import pokemons from "./pokeData";

function App() {
  const [page, setPage] = useState("home")
  const [bigPokemon, setBigPokemon] = useState({
    id: "", 
    name: "", 
    height: "", 
    weight: "", 
    type: "", 
    ability: "", 
    src: ""
  })

  function toBigPokemon(id, name, height, weight, type, ability, src) {
    const bigPoke = {id: id, name: name, src: src, height: height, weight: weight, type: type, ability: ability}; 

    setBigPokemon(bigPoke)
    setPage("card")
  }

  const pokemonItems = pokemons.map(pokemon => 
    <Box 
      key={pokemon.id} 
      id={pokemon.id} 
      name={pokemon.name} 
      height={pokemon.height} 
      weight={pokemon.weight} 
      type={pokemon.type} 
      ability={pokemon.ability} 
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
      toBigPokemon={toBigPokemon}
    />
  )

  const bigPokemonItems = <BigBox 
                            key={bigPokemon.id} 
                            id={bigPokemon.id} 
                            name={bigPokemon.name} 
                            height={bigPokemon.height} 
                            weight={bigPokemon.weight} 
                            type={bigPokemon.type} 
                            ability={bigPokemon.ability} 
                            src={bigPokemon.src} 
                          />

  return (
    <>
      <div className="NavBar">
        <button className={page === "home" ? "NavBarButtonActive" : "NavBarButton"} onClick={() => setPage("home")}>Home</button>
        <button className={page === "pokedex" ? "NavBarButtonActive" : "NavBarButton"} onClick={() => setPage("pokedex")}>Pokedex</button>
      </div>
      {
        page === "home" ? 
        <div className="Home">
          <p>Home</p>
        </div> :
        <div>
          {page === "pokedex" ? 
            <div className="BoxContainer">{pokemonItems}</div> : 
            <div className="BigBoxContainer">{bigPokemonItems}</div>
          }
        </div>
      }
    </>
  );
}

export default App;
