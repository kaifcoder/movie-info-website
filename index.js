const url = "http://www.omdbapi.com/?i=tt3896198&apikey=5555b04d";

let movieNameRef = document.getElementById("movie-name");
let searchBtnRef = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=5555b04d`;
  if (movieName.length <= 0) {
    result.innerHTML = "<h3 class='msg'>Please enter a movie name</h3>";
  } else {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.Response == "False") {
          result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
        } else {
          result.innerHTML = `<div class="info">
            <img src="${data.Poster}" alt="Movie Poster" class="poster"/>
            <div>
              <h2>${data.Title}</h2>
              <div class="rating">
                <img src="star-icon.svg" alt="star" />
                <h4>${data.imdbRating}</h4>
              </div>
              <div class= "details">
              <span>${data.Rated}</span>
              <span>${data.Year}</span>
              <span>${data.Runtime}</span>
              </div>
              <div class = "genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
              </div>
              </div>
              </div>
              <h3>Plot: </h3>
              <p>${data.Plot}</p>
              <h3>Actors: </h3>
              <p>${data.Actors}</p>
          `;
        }
      })
      .catch((err) => {
        result.innerHTML = `<h3 class="msg">Something went wrong</h3>`;
      });
  }
};

searchBtnRef.addEventListener("click", getMovie);
movieNameRef.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getMovie();
  }
});
