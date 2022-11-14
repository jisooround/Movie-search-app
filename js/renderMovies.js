import detailPage from "./movieDetail.js";

export default function renderMovies(movies) {
  for(let movie of movies){
    const movieEl = document.createElement('div');
    const imgDivEl = document.createElement('div');
    const infoDivEl = document.createElement('div');
    const titleEl = document.createElement('h4');
    const yearEl = document.createElement('p');
    const detailEl = document.createElement('div');
    
    movieEl.className = 'group';
    imgDivEl.className = 'group__imgdiv';
    infoDivEl.className = 'group__infodiv';
    titleEl.className = 'group__infodiv__title';
    yearEl.className = 'group__infodiv__year';
    detailEl.className = 'group__infodiv__detail'
    detailEl.innerText = '+'

    imgDivEl.style.backgroundImage = `url(${movie.Poster})`;
    titleEl.innerText = `${movie.Title}`;
    yearEl.innerText = `${movie.Year}`;

    if(`${movie.Poster}` === "N/A"){
      imgEl.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
    };

    // detail 버튼 클릭 시 detail 정보 불러오기
    detailEl.addEventListener('click', () => {
      detailPage(movie);
      document.querySelector('#detail-container').classList.add('display');
      document.querySelector('.message').classList.add('none');
    })

    infoDivEl.appendChild(titleEl);
    infoDivEl.appendChild(yearEl);
    infoDivEl.appendChild(detailEl);
    movieEl.appendChild(imgDivEl);
    movieEl.appendChild(infoDivEl);
    movieFeed.appendChild(movieEl);
  };
}