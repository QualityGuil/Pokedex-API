let id = 0;

async function getPokemon(id) {
    try {
        // Conseguindo a url do pokemon em questão
        const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
        const response = await fetch(url);
        const data = await response.json();

        pokemon = data.results[id].url;
        console.log(pokemon);

        // Pegando as informações do pokemon diretamente
        const urlPokemon = pokemon;
        const responsePokemon = await fetch(urlPokemon);
        const dataPokemon = await responsePokemon.json();
        
        return dataPokemon;

    } catch (erro) {
        console.log('Erro:', erro);
    }
}

async function insertPokemon(id) {

    const pokemon = await getPokemon(id);

    // console.log(pokemon.name);
    document.getElementById('name').textContent = pokemon.name;
    document.getElementById('sprite__pokemon').src = pokemon.sprites.front_default;

}

document.getElementById('btn__previous').addEventListener('click', () => {
    if (id === 0) {
        insertPokemon(id);
    } else {
        id--
        insertPokemon(id);
    }
});

document.getElementById('btn__next').addEventListener('click', () => {
    if (id === 1000) {
        insertPokemon(id);
    } else {
        id++
        insertPokemon(id);
    }
});

insertPokemon(id);