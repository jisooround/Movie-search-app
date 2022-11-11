import renderMovies from "./renderMovies.js";

const inputEl = document.getElementById('search-input');
const buttonEl = document.getElementById('search-btn');
const moreBtnEl = document.getElementById('more-btn');
const movieFeed = document.getElementById('movieFeed');
const spans = document.querySelectorAll('span');
const sections = document.getElementsByClassName('section');
const introTop = sections[0].offsetTop;
const mainTop = sections[1].offsetTop;
let page = 1;

// 스크롤 이벤트
spans[0].onclick = function() {
  window.scroll({top:mainTop, behavior: 'smooth'});
}
spans[1].onclick = function() {
  window.scroll({top:introTop, behavior: 'smooth'});
}
spans[2].onclick = function() {
  window.scroll({top:mainTop, behavior: 'smooth'});
}

// 영화 검색 결과 불러오기
async function getMovies(title = '', page = 1, year = '') {
  return new Promise((resolve, reject) => {
      fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}&page=${page}&y=${year}`)
        .then(res => res.json())
        .then(res => resolve(res))
        .then(json => {
          if(json.Response === 'False') {
            reject(json.Error)
          }
          resolve(json)
        })
        .catch(error => {
          reject(error)
        })
    })
};

// 남은 결과가 있을 때 버튼 노출
function renderMoreBtn(totalResults) {
  const total = Math.ceil(Number(totalResults) / 10)
  if (page < total) {
    moreBtnEl.classList.add('active')
  } else {
    moreBtnEl.classList.remove('active')
  }
}

// search 버튼 클릭 시 input의 value가 api {t}로 전송
buttonEl.addEventListener('click', searchMoviesFirst);
async function searchMoviesFirst() {
  movieFeed.innerHTML = '';

  const countEl = document.getElementById('count-select');
  page = (countEl.options[countEl.selectedIndex].value);

  const title = inputEl.value;
  console.log(title);

  for(let i = 1; i <= page; i++){
    try {
      const { Search: movies, totalResults } = await getMovies(title, i);
      renderMovies(movies)
      renderMoreBtn(totalResults)
      console.log(movies);
    } catch (error) {
      moreBtnEl.classList.remove('active')
      console.log(error)
    }
  }
  return page;
};

// input창에서 enter키 입력 시 search 버튼 클릭 기능
inputEl.addEventListener('keyup', searchEnter);
function searchEnter(event){
  if(event.keyCode === 13){
    searchMoviesFirst();
  }
}

// 더보기 버튼 클릭시 page수 추가하여 요청
moreBtnEl.addEventListener('click', async() => {
  page++;
  console.log(page);
  const title = inputEl.value;
  console.log(title);
  try {
    const { Search: movies, totalResults } = await getMovies(title, page);
    renderMovies(movies)
    renderMoreBtn(totalResults)
    console.log(movies);
  } catch (error) {
    console.log(error);
  }
})