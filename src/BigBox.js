
import React, { useState } from "react";
import pokemons from "./pokeData";
import pokemonsDes from "./pokeDesData";

function BigBox({ id, name, height, weight, type, ability, src }) {
    const [localID, setLocalID] = useState(id)
    const [localName, setLocalName] = useState(name)
    const [localHeight, setLocalHeight] = useState(height)
    const [localWeight, setLocalWeight] = useState(weight)
    const [localType, setLocalType] = useState(type)
    const [localAbility, setLocalAbility] = useState(ability)
    const [localSrc, setLocalSrc] = useState(src)
    const [des, setDes] = useState(pokemonsDes[id-1].description)
  
    function pokemonUp(pokemons, id) {
      if(id === 151) {id = 0}
      const newPokemon = pokemons.filter(pokemon => pokemon.id === id + 1)
      setLocalID(newPokemon[0].id)
      setLocalName(newPokemon[0].name)
      setLocalHeight(newPokemon[0].height)
      setLocalWeight(newPokemon[0].weight)
      setLocalType(newPokemon[0].type)
      setLocalAbility(newPokemon[0].ability)
      setLocalSrc(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${newPokemon[0].id}.png`)
      setDes(pokemonsDes[id].description)
    }
  
    function pokemonDown(pokemons, id) {
      if(id === 1) {id = 152}
      const newPokemon = pokemons.filter(pokemon => pokemon.id === id - 1)
      setLocalID(newPokemon[0].id)
      setLocalName(newPokemon[0].name)
      setLocalHeight(newPokemon[0].height)
      setLocalWeight(newPokemon[0].weight)
      setLocalType(newPokemon[0].type)
      setLocalAbility(newPokemon[0].ability)
      setLocalSrc(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${newPokemon[0].id}.png`)
      setDes(pokemonsDes[id-2].description)
    }
  
    return(
      <div className="BigBox">
        <div id="item-0"><button className="RoundButton" onClick={() => pokemonDown(pokemons, localID)}>Prev</button></div>
        <div id="item-1"><h1>#{localID} {localName}</h1></div>
        <div id="item-2"><img alt="" src={localSrc} width="400"></img></div>
        <div id="item-3">
          <p>Heigh: {localHeight}</p>
          <p>Weight: {localWeight}</p>
          <p>Type: {localType}</p>
          <p>Ability: {localAbility}</p>
        </div>
        <div id="item-4"><p>{des}</p></div>
        <div id="item-5"><button className="RoundButton" onClick={() => pokemonUp(pokemons, localID)}>Next</button></div>
      </div>
    )
}

export default BigBox;
