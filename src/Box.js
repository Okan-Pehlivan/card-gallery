
import React from "react";

function Box({ id, name, height, weight, type, ability, src, toBigPokemon }) {
    return(
      <div className="Box" onClick={() => toBigPokemon(id, name, height, weight, type, ability, src)} >
        <img alt="" src={src} width="150"></img>
        <p>#{id}</p>
        <p>{name}</p>
      </div>
    )
}

export default Box;
