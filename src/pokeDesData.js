
const pokemonsDes = [];
const requests = [];

for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
    const prom = fetch(url).then((r) => r.json());
  
    requests.push(prom);
}

new Promise((resolve) => {
    Promise.all(requests)
    .then((proms) =>
        proms.forEach((p) => pokemonsDes.push({
            description: p.flavor_text_entries[0].flavor_text.replace(/\n/g, ' ').replace(/\f/g, ' ')
        }))
    )
    .then(() => resolve(pokemonsDes));
});

export default pokemonsDes;
