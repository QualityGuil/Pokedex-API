// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})

// function getPokemon() {
//     // Primeira requisição: busca a lista de Pokémon
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
//         .then(response => {
//             // Verifica se a requisição foi bem-sucedida
//             if (!response.ok) {
//                 throw new Error('Erro na requisição da lista de Pokémon');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Pega a URL do primeiro Pokémon da lista
//             const pokemonUrl = data.results[0].url; 

//             // Segunda requisição: busca os dados de um Pokémon específico
//             return fetch(pokemonUrl);
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Erro na requisição do Pokémon específico');
//             }
//             return response.json();
//         })
//         .then(pokemonData => {
//             // Acessa a URL da imagem de um Pokémon específico
//             const imageUrl = pokemonData.sprites.front_default;
//             console.log("URL da imagem:", imageUrl);
            
//             // Altera o src da imagem no HTML (se houver uma tag <img>)
//             document.querySelector('img').src = imageUrl;
//         })
//         .catch(error => {
//             // Captura qualquer erro que ocorra em qualquer uma das Promises
//             console.error("Ops, algo deu errado:", error);
//         });
// }

// getPokemon();

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
        .catch(err => {
            console.log(err)
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