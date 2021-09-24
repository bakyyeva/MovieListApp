//API URL
const API_KEY = `api_key=cd51975e272aeb7b18074d7a85d785c7`;
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL+'/search/movie?'+API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

//Fetch
function getMovies(url) {
    fetch(url).then(response => response.json()).then(data => {
        showMovies(data.results);
    })
}
//Show Movies
function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <a href="${IMG_URL+movie.poster_path}"> <img src="${IMG_URL+movie.poster_path}" alt="${movie.title}"> </a>
            <div class="movie_info">
                <h3>${movie.title}</h3>
                <h4> ${movie.release_date.slice(0,4)} </h4>
                <span class="${getColor(movie.vote_average)}">${movie.vote_average}</span>
            </div>
        `
        main.appendChild(movieEl);
    })
}
 //Vote rate
function getColor(vote) {
    if(vote > 7){
        return 'green'
    }else if(vote > 5){
        return "blue"
    }else{
        return 'red'
    }
}
//Searching for movies
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }
})