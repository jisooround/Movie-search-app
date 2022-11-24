import detail from "./detail.js";

export default function renderMovies(movies) {
  for(let movie of movies){
    const movieEl = document.createElement('div');
    movieEl.className = 'group';
    const imgDivEl = document.createElement('div');
    imgDivEl.className = 'group__imgdiv';
    imgDivEl.role = 'img';
    imgDivEl.title = 'Poster';
    const infoDivEl = document.createElement('div');
    infoDivEl.className = 'group__infodiv';
    const titleEl = document.createElement('h4');
    titleEl.className = 'group__infodiv__title';
    const yearEl = document.createElement('p');
    yearEl.className = 'group__infodiv__year';
    const detailEl = document.createElement('div');
    detailEl.className = 'group__infodiv__detail'
    detailEl.innerText = '+'

    // 포스터 이미지 좋은 화질로 바꾸기
    const imageURL = `${movie.Poster}`;
    const highQualityMoviePoster = imageURL.replace("SX300", "SX700");

    imgDivEl.style.backgroundImage = `url(${highQualityMoviePoster})`;
    titleEl.innerText = `${movie.Title}`;
    yearEl.innerText = `${movie.Year}`;

    if(`${movie.Poster}` === "N/A"){
      imgDivEl.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png)`
      imgDivEl.title = 'No image available';
    };

    // detail 버튼 클릭 시 detail 정보 불러오기
    detailEl.addEventListener('click', () => {
      detail(movie);
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