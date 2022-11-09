import renderMovies from "./renderMovies.js";
import makeMoreButton from "./moreButton.js"

const movieFeed = document.getElementById('movieFeed');

// Search section
const inputEl = document.getElementById('search-input');
const buttonEl = document.getElementById('searchBtn');


// 영화 검색 결과 불러오기
async function getMovies(title, year='', page = 1) {
    const s = `&s=${title}`
    const y = `&y=${year}`
    const p = `&page=${page}`
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c${s}${y}${p}`)
    const {Search : movies, totalResults} = await res.json();
    console.log(movies);
    console.log(totalResults);
    renderMovies(movies);
    makeMoreButton();
    return movies;
};

// search 버튼 클릭 시 input의 value가 api {t}로 전송
buttonEl.addEventListener('click', searchClick);
function searchClick(){
  movieFeed.innerHTML = '';
  let title = inputEl.value;
  console.log(title);
  getMovies(title);
};

// input창에서 enter키 입력 시 search 버튼 클릭 기능
inputEl.addEventListener('keyup', searchEnter);
function searchEnter(event){
  if(event.keyCode === 13){
    searchClick();
  }
}