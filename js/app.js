const container = document.getElementById('root');
const form = document.createElement('form');
const inputEl = document.createElement('input');
const buttonEl = document.createElement('button');
inputEl.type = 'text';
buttonEl.innerHTML = 'Search';


// 영화 검색 결과 불러오기
async function getMovies(keyword) {
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${keyword}&page=1`);
    const {Search : movies} = await res.json();
    console.log(movies);

    for(let movie of movies){
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const aEl = document.createElement('a');
    const poster = document.createElement('div');
    const imgEl = document.createElement('img');
  
    aEl.innerHTML = `${movie.Title} ${movie.Year}`;
    imgEl.src = `${movie.Poster}`;
    
    poster.appendChild(imgEl);
    aEl.appendChild(poster);
    li.appendChild(aEl);
    ul.appendChild(li);
    container.appendChild(ul);
  }
};

buttonEl.addEventListener('click', () => {
  let keyword = inputEl.value;
  console.log(keyword);
  getMovies(keyword);
});

inputEl.addEventListener('keydown', (e)=> {
  if(e.keyCode === 13){
    buttonEl.onclick;
  }
});

form.appendChild(inputEl);
form.appendChild(buttonEl);
container.appendChild(form);