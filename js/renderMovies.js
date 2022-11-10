export default function renderMovies(movies) {
  for(let movie of movies){
    const movieEl = document.createElement('div');
    const imgDivEl = document.createElement('div');
    const imgEl = document.createElement('img');
    const infoDivEl = document.createElement('div');
    const titleEl = document.createElement('h4');
    const yearEl = document.createElement('p');
    movieEl.className = 'group';
    imgDivEl.className = 'group__imgdiv';
    infoDivEl.className = 'group__infodiv';
    titleEl.className = 'group__infodiv__title';
    yearEl.className = 'group__infodiv__year';

    imgEl.src = `${movie.Poster}`;
    titleEl.innerText = `${movie.Title}`;
    yearEl.innerText = `${movie.Year}`;

    if(`${movie.Poster}` === "N/A"){
      imgEl.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
    };

    imgDivEl.appendChild(imgEl);
    infoDivEl.appendChild(titleEl);
    infoDivEl.appendChild(yearEl);
    movieEl.appendChild(imgDivEl);
    movieEl.appendChild(infoDivEl);
    movieFeed.appendChild(movieEl);
  };
}