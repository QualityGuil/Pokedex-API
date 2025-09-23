function getDataPokemon(id) {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(data => data.json())
        .then(data => {
            // console.log(data);
            document.getElementById('name').textContent = data.results[id].name;
            return data.results[id].url
        })
        .then(data => {
            fetch(data)
                .then(data => data.json())
                .then(data => {
                    document.querySelector('img').src = data.sprites.front_default;
                    // console.log(data.sprites.front_default);
                })
        })

}

let id = 0;

getDataPokemon(id);

const btnPrevious = document.getElementById('btn__previous');

btnPrevious.addEventListener('click', () => {
    if (id > 0) {
        id--
        getDataPokemon(id);
    } else {
        getDataPokemon(id);
    }
})

const btnNext = document.getElementById('btn__next');

btnNext.addEventListener('click', () => {
    id++;
    getDataPokemon(id);
})