const container = document.getElementById('root');

// Feed section
const movieFeed = document.createElement('div');
movieFeed.className = 'feed'

// Search section
const searchEl = document.createElement('div');
const inputEl = document.createElement('input');
const buttonEl = document.createElement('button');
const sYear = document.createElement('select');
const sYearOption = document.createElement('option');
sYear.name = 'Year';
sYear.id = 'year-select';
inputEl.type = 'text';
inputEl.id = 'search-input'
buttonEl.innerHTML = 'Search';
buttonEl.type = 'button';
searchEl.className = 'search';
searchEl.appendChild(sYear);
searchEl.appendChild(inputEl);
searchEl.appendChild(buttonEl);


// 영화 검색 결과 불러오기
async function getMovies(title, year='', page = 2) {
    const s = `&s=${title}`
    const y = `&y=${year}`
    const p = `&page=${page}`
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c${s}${y}${p}`)
    const {Search : movies, totalResults} = await res.json();
    console.log(movies);
    console.log(totalResults);


    // 검색 결과 html로 생성
    for(let movie of movies){
    const movieEl = document.createElement('div');
    movieEl.className = 'feed--movie';
    const divEl = document.createElement('div');
    divEl.className = 'feed--movie--img';
    const imgEl = document.createElement('img');
    const infoEl = document.createElement('div');
    infoEl.className = 'feed--movie--info';
    const titleEl = document.createElement('a');
    titleEl.className = 'feed--movie--info--title';
    const yearInfoEl = document.createElement('p');
    yearInfoEl.className = 'feed--movie--info--year';
  
    titleEl.innerHTML = `${movie.Title}`;
    yearInfoEl.innerHTML = `${movie.Year}`;
    imgEl.src = `${movie.Poster}`;

    if(`${movie.Poster}` === 'N/A'){
      imgEl.src = 'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4=';
    };
    
    divEl.appendChild(imgEl);
    movieEl.appendChild(divEl);
    infoEl.appendChild(titleEl);
    infoEl.appendChild(yearInfoEl);
    movieEl.appendChild(infoEl);
    movieFeed.appendChild(movieEl);
    movieFeed.appendChild(actionDiv);
    container.appendChild(movieFeed);
  }
};




// 결과 더 가져오기 버튼
const actionDiv = document.createElement('div');
actionDiv.className = 'feed--action';
const moreBtn = document.createElement('button');
moreBtn.innerHTML = 'More';
moreBtn.className = 'feed--action--btn';
actionDiv.appendChild(moreBtn);
moreBtn.addEventListener('click', clickMoreBtn);

async function clickMoreBtn() {
  const movies = await getMovies(page);
  page++;
  getMovies(movies);
}

// search 버튼 클릭 시 input의 value가 api {t}로 전송
buttonEl.addEventListener('click', searchClick);
function searchClick(){
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



container.appendChild(searchEl);