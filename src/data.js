
//const pokemonData = fetch("https://pokeapi.co/api/v2/pokemon/1/").then(res => res.json())
//const pokemonSpeciesData = fetch("https://pokeapi.co/api/v2/pokemon-species/1/").then(res => res.json())

//JSON.stringify(pokemonData.name, null, 2)
//JSON.stringify(pokemonSpeciesData.flavor_text_entries[0].flavor_text.replace(/\n/g, ' ').replace(/\f/g, ' '), null, 2)

const pokemonName = [];
    
    for (let i = 1; i <= 151; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

      fetch(url).then(res => res.json())
                .then( data => {
                        const pokemon = {
                          id: data.id,
                          name: data.name
                        };

                        pokemonName.push(pokemon);
                        } 
                      );
    }

export default pokemonName;
