var ls = document.getElementById("output");
fetch("https://api.themoviedb.org/3/discover/movie?api_key=cd51975e272aeb7b18074d7a85d785c7&sort_by=popularity.desc").
then(resolve => resolve.json()).
then(json => {
    json.results.forEach(data => {
        const div = document.createElement("div");
        const title = document.createElement("div");
        title.id= "iki";
        div.innerHTML += `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}"/>`
        title.innerHTML+= `${data.title}`;
        div.appendChild(title);
        ls.appendChild(div);
    });
});
