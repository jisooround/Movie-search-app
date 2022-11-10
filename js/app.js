import renderMovies from "./renderMovies.js";
import moreButton from "./moreButton.js"

const movieFeed = document.getElementById('movieFeed');

// Search section
const inputEl = document.getElementById('search-input');
const buttonEl = document.getElementById('searchBtn');
const moreBtnEl = document.getElementById('more-btn');
let page = 1;

// 영화 검색 결과 불러오기
async function getMovies(title, year='', page = 1) {
    const s = `&s=${title}`
    const y = `&y=${year}`
    const p = `&page=${page}`
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c${s}${y}${p}`)
    const {Search : movies, totalResults} = await res.json();
    console.log(movies);
    console.log(totalResults);
    const total = Math.ceil(Number(totalResults) / 10)
    if (page < total) {
      moreBtnEl.classList.add('active')
    } else {
      moreBtnEl.classList.remove('active')
    }
    renderMovies(movies);
};

function searchMoviesFirst() {
  movieFeed.innerHTML = '';
  page = 1;
  const title = inputEl.value;
  console.log(title);
  getMovies(title, page);
};

// search 버튼 클릭 시 input의 value가 api {t}로 전송
buttonEl.addEventListener('click', searchMoviesFirst);

// input창에서 enter키 입력 시 search 버튼 클릭 기능
inputEl.addEventListener('keyup', searchEnter);
function searchEnter(event){
  if(event.keyCode === 13){
    searchMoviesFirst();
  }
}

moreBtnEl.addEventListener('click', () => {
  page += 1
  getMovies(title, page);
})