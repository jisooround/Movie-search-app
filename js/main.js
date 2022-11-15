import renderMovies from "./renderMovies.js";
import getMovies from "./getMovies.js";

const yearEl = document.getElementById('year-select');
const inputEl = document.getElementById('search-input');
const buttonEl = document.getElementById('search-btn');
const moreBtnEl = document.getElementById('more-btn');
const movieFeed = document.getElementById('movieFeed');
const spans = document.querySelectorAll('span');
const sections = document.getElementsByClassName('section');
const introTop = sections[0].offsetTop;
const mainTop = sections[1].offsetTop;
const errorEl = document.getElementById('error');
const searchMessageEl = document.getElementById('search-message');
const totalMessage = document.getElementById('total-message-text')
let page = 1;
yearList();

// 스크롤 이벤트
spans[0].onclick = function() {
  window.scroll({top:introTop, behavior: 'smooth'});
}
spans[1].onclick = function() {
  window.scroll({top:introTop, behavior: 'smooth'});
}
spans[2].onclick = function() {
  window.scroll({top:mainTop, behavior: 'smooth'});
}
spans[3].onclick = function() {
  window.scroll({top: document.body.scrollHeight, left: 0, behavior: 'smooth'});
}
spans[4].onclick = function() {
  window.scroll({top:mainTop, behavior: 'smooth'});
}

// 최초 검색
buttonEl.addEventListener('click', searchMoviesFirst);
async function searchMoviesFirst() {
  movieFeed.innerHTML = '';
  searchMessageEl.classList.add('none');
  
  const year = (yearEl.options[yearEl.selectedIndex].value);
  const typeEl = document.getElementById('type-select');
  const type = (typeEl.options[typeEl.selectedIndex].value);
  const countEl = document.getElementById('count-select');
  page = (countEl.options[countEl.selectedIndex].value);

  const title = inputEl.value;
  totalMessage.classList.add('none');
  // 콘솔 확인
  // console.log(title);
  // console.log(type);
  // console.log(year);

  for(let i = 1; i <= page; i++){
    try {
      const { Search: movies, totalResults } = await getMovies(title, i, type, year);
      const total = Math.ceil(Number(totalResults) / 10);
      renderMovies(movies);
      renderMoreBtn(totalResults);
      errorEl.classList.remove('display');
      // 콘솔 확인
      // console.log(total);
      // console.log(totalResults);

      // 결과가 요청하는 페이지보다 작다면 break
      if(total < page) {
        totalMessage.classList.remove('none');
        totalMessage.textContent = `💬 The search results are  ${totalResults}.`;
        break;
      }
    } catch (error) {
      moreBtnEl.classList.remove('active');
      errorEl.classList.add('display');
      // console.log(error);
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
  const title = inputEl.value;
  // 콘솔 확인
  // console.log(page);
  // console.log(title);
  try {
    const { Search: movies, totalResults } = await getMovies(title, page);
    renderMovies(movies);
    renderMoreBtn(totalResults);
    // 콘솔 확인
    // console.log(movies);
  } catch (error) {
    console.log(error);
  }
});

// 남은 결과가 있을 때 버튼 노출
function renderMoreBtn(totalResults) {
  const total = Math.ceil(Number(totalResults) / 10);
  if (page < total) {
    moreBtnEl.classList.add('active');
  } else {
    moreBtnEl.classList.remove('active');
  }
};

// 년도 리스트 생성
function yearList() {
  let date = new Date();
  let currentYear = date.getFullYear();
  for(let i = currentYear; i >= 1980; i--){
    const yearLiEl = document.createElement('option');
    yearLiEl.classList.add('year-option');
    yearLiEl.innerText = i;
    yearLiEl.value = `${i}`;
    yearEl.appendChild(yearLiEl);
    // 콘솔 확인
    // console.log(yearLiEl.innerHTML);
    // console.log(yearLiEl.value);
  }
};
