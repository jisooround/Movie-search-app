export default function renderDetail(details) {
  const bgEl = document.getElementById('detail-bg');
  const posterEl = document.getElementById('img-wrap');
  const ratingEl = document.createElement('div');
  ratingEl.className = 'rating';
  const logoEl = document.createElement('img');
  logoEl.className = 'logo';
  const resultEl = document.createElement('p');
  resultEl.className = 'result';
  document.getElementById('detail-title').innerText = `${details.Title}`;
  document.getElementById('detail-released').innerText = `${details.Released}`;
  document.getElementById('detail-plot').innerText = `${details.Plot}`;
  document.getElementById('actors').innerText = `${details.Actors}`;
  document.getElementById('director').innerText = `${details.Director}`;
  document.getElementById('genre').innerText = `${details.Genre}`;
  posterEl.style.backgroundImage = `url(${details.Poster})`;
  bgEl.style.backgroundImage = `url(${details.Poster})`;
  
  if(`${details.Poster}` === "N/A"){
    posterEl.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png)`
  };

  const ratingsInfo = document.getElementById('ratings-info');
  ratingsInfo.innerHTML ='';

  // 평점 제공사와 결과 함께 보여주기
  for(let i = 0; i < details.Ratings.length; i++){
    logoEl.src = '/' + `${details.Ratings[i].Source}` + '.png';
    resultEl.textContent = `${details.Ratings[i].Value}`;

    ratingEl.append(logoEl, resultEl);
    ratingsInfo.append(ratingEl);
  }

  // 제공된 평점이 없을 경우 결과 없음 메세지
  if(details.Ratings.length === 0){
    resultEl.innerHTML = 'No rating results provided.';

    ratingEl.append(resultEl);
    ratingsInfo.append(ratingEl);
  }

  window.scroll({top: document.body.scrollHeight, left: 0, behavior: 'smooth'});
};