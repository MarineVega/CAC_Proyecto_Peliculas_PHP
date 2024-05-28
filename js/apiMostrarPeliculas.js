document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM cargado');
    
});

// datos de la API
const API_SERVER = 'https://api.themoviedb.org/3';
const options = {
    method: 'GET', // Método de la petición (GET)
    headers: {
        accept: 'application/json', // Tipo de respuesta esperada (JSON)
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'            
    }
};

function crearTarjetaPelicula(pelicula) {
    //const card = document.createElement('section');
    const card = document.createElement('section');
    card.classList.add('peliculasAclamadas','');
    const cardInner = document.createElement('div');
    cardInner.classList.add('galeriaAclamadas');
    const cardImg = document.createElement('img');
    cardImg.classList.add('caja-img')

    cardImg.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
    cardImg.alt = pelicula.title;
    cardImg.loading = 'lazy';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cartTitle.textContent = pelicula.title

    cardBody.appendChild(cardTitle);
    cardInner.appendChild(cardImg);
    cardInner.appendChild(cardBody);
    card.appendChild(cardInner);

    return card;
};

const cargarPeliculas = async (page = 1) => {
    try{
        const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options);
        console.log(response);
        const data = await response.json();
        console.log(data);
        const movies = data.results;
        console.log(movies);
        const peliculasSection = document.getElementById('peliculasSecion');
        peliculasSection.innerHTML = '';
        movies.forEach(movie => {
            const peliculaCard = crearTarjetaPelicula(movie);
            peliculasSection.appendChild(peliculaCard);
        });
    }catch(error){
        console.error(error);
    }
};


// fetch(`${API_SERVER}/movie/popular?page=${1}`,options)
// .then((response)=>response.json())
// .then((results)=>{
//     console.log(results);
//     console.log(results.results);
//     console.log(results.results[1].title);

//     results.results.forEach((elementos) => {
//         console.log(elementos.title);

//         const contenedorCreado = document.createElement('div')
//         contenedorCreado.innerHTML = `            
//             <img src="https://image.tmdb.org/t/p/w500/${elementos.backdrop_path}">
//         `;
        
//         contenedorPeliculas.appendchild(contenedorCreado);
//     });
// })

//<h4>${elementos.title}</h4>