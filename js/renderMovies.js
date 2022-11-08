export default function renderMovies(movies) {
  // 검색 결과 html로 생성
  for(let movie of movies){
    const movieEl = document.createElement('div');
    movieEl.className = 'feed--movie';
    movieEl.innerHTML = `
      <div class="feed--movie--img">
      <img src="${movie.Poster}" />
      </div>
      <div class="feed--movie--info">
      <a class="feed--movie--info--title">"${movie.Title}"</a>
      <p class="feed--movie--info--year">"${movie.Year}"</p>
      </div>
    `
    if(`${movie.Poster}` === 'N/A'){
      imgEl.src = 'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4=';
    };
    const movieFeed = document.createElement('div');
    movieFeed.append(movieEl);
    return movieFeed;
  };
}