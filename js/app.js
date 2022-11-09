import renderMovies from "./renderMovies";

const movieFeed = document.getElementById('movieFeed');

// Search section
const searchEl = document.getElementById('searchGroup');
const inputEl = document.getElementById('search-input')
const buttonEl = document.getElementById('searchBtn')

// 영화 검색 결과 불러오기
async function getMovies(title, year='', page = 2) {
    const s = `&s=${title}`
    const y = `&y=${year}`
    const p = `&page=${page}`
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c${s}${y}${p}`)
    const {Search : movies, totalResults} = await res.json();
    console.log(movies);
    console.log(totalResults);
    renderMovies(movies);
}

// 검색 결과 출력
// function renderMovies(movies) {
//       for(let movie of movies){
//         const movieEl = document.createElement('div');
//         const imgDivEl = document.createElement('div');
//         const imgEl = document.createElement('img');
//         const infoDivEl = document.createElement('div');
//         const titleEl = document.createElement('h4');
//         const yearEl = document.createElement('p');
//         movieEl.className = 'main--movie--item--group';
//         imgDivEl.className = 'main--movie--item--group--imgdiv';
//         infoDivEl.className = 'main--movie--item--group--infodiv';
//         titleEl.className = 'main--movie--item--group--infodiv--title';
//         yearEl.className = 'main--movie--item--group--infodiv--year';
//         imgEl.src = `${movie.Poster}`;
//         titleEl.innerText = `${movie.Title}`;
//         yearEl.innerText = `${movie.Year}`;
//         imgDivEl.appendChild(imgEl);
//         infoDivEl.appendChild(titleEl);
//         infoDivEl.appendChild(yearEl);
//         movieEl.appendChild(imgDivEl);
//         movieEl.appendChild(infoDivEl);
//         movieFeed.appendChild(movieEl);
//         movieFeed.appendChild(actionDiv);
//       };
// }

// 결과 더 가져오기 버튼
// const actionDiv = document.createElement('div');
// actionDiv.className = 'main--movie--item--action';
// const moreBtn = document.createElement('button');
// moreBtn.innerHTML = 'More';
// moreBtn.className = 'main--movie--item--action--btn';
// actionDiv.appendChild(moreBtn);
// moreBtn.addEventListener('click', clickMoreBtn);

// function clickMoreBtn() {
//   // const movies = getMovies(page);
//   // const pageUp = page+1;
//   // getMovies(pageUp);
//   // renderMovies(movies);
//   console.log('page2')
// }

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