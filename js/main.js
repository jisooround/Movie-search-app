;(async () => {
  // 초기화 코드
  const moviesEl = document.querySelector('.movies');
  const moreBtnEl = document.querySelector('.btn');
  const searchEl = document.querySelector('.search');
  let page = 1

  // 최초 호출
  const movies = await getMovies();
  page += 1;
  renderMovies(movies);
  searchArea(movies);

  // 더보기 버튼 클릭
  moreBtnEl.addEventListener('click', async () => {
    const movies = await getMovies(page);
    page += 1;
    renderMovies(movies);
  })

  console.log(movies);

  async function getMovies(page = 1) {
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=avengers&page=${page}`)
    const { Search: movies } = await res.json();
    return movies;
  }

  function searchArea(movies){
    const el = document.createElement('div');
    el.classList.add('search--inner');
    
    // input
    const inputEl = document.createElement('input');
    
    // year select box
    const yearSelectEl = document.querySelector('select');
    const yearEl = document.createAttribute('')

    el.append(yearSelectEl,inputEl);
    searchEl.append(el);
  }

  function renderMovies(movies) {
    for (const movie of movies) {

      // movie div
      const el = document.createElement('div');
      el.classList.add('movie');

      // movie poster
      const imgEl = document.createElement('img');
      imgEl.src = movie.Poster;

      // movie title
      const h1El = document.createElement('h1');
      h1El.textContent = movie.Title;
      h1El.addEventListener('click', () => {
        console.log(movie.Title);
      });

      // movie year
      const pEl = document.createElement('p');
      pEl.textContent = movie.Year;
      pEl.addEventListener('click', () => {
        console.log(movie.Year);
      });

      el.append(imgEl, h1El, pEl);
      moviesEl.append(el)
    }
  }
})()