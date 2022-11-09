import moreMovies from "./moreMovies";

export default function renderMovies(movies) {
  for(let movie of movies){
    const movieEl = document.createElement('div');
    const imgDivEl = document.createElement('div');
    const imgEl = document.createElement('img');
    const infoDivEl = document.createElement('div');
    const titleEl = document.createElement('h4');
    const yearEl = document.createElement('p');
    movieEl.className = 'main--movie--item--group';
    imgDivEl.className = 'main--movie--item--group--imgdiv';
    infoDivEl.className = 'main--movie--item--group--infodiv';
    titleEl.className = 'main--movie--item--group--infodiv--title';
    yearEl.className = 'main--movie--item--group--infodiv--year';
    imgEl.src = `${movie.Poster}`;
    titleEl.innerText = `${movie.Title}`;
    yearEl.innerText = `${movie.Year}`;
    imgDivEl.appendChild(imgEl);
    infoDivEl.appendChild(titleEl);
    infoDivEl.appendChild(yearEl);
    movieEl.appendChild(imgDivEl);
    movieEl.appendChild(infoDivEl);
    movieFeed.appendChild(movieEl);
  };
}