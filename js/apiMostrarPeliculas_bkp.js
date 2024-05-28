// datos de la API
const API_SERVER = 'https://api.themoviedb.org/3';
const options = {
    method: 'GET', // Método de la petición (GET)
    headers: {
        accept: 'application/json', // Tipo de respuesta esperada (JSON)
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'            
    }
};

//let seccionAclamadas = document.getElementById("aclamadas");
//let contenedorPeliculas = document.getElementsByClassName("galeriaAclamadas");
let contenedorPeliculas = document.getElementById("galAclamada");


fetch(`${API_SERVER}/movie/popular?page=${1}`,options)
.then((response)=>response.json())
.then((results)=>{
    console.log(results);
    console.log(results.results);
    console.log(results.results[1].title);

    results.results.forEach((elementos) => {
        console.log(elementos.title);

        const contenedorCreado = document.createElement('div')
        contenedorCreado.innerHTML = `            
            <img src="https://image.tmdb.org/t/p/w500/${elementos.backdrop_path}">
        `;
        
        contenedorPeliculas.appendchild(contenedorCreado);
    });
})

//<h4>${elementos.title}</h4>