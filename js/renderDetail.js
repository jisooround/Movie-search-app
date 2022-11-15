export default function renderDetail(details) {
  const bgEl = document.getElementById('detail-bg');
  const posterEl = document.getElementById('img-wrap');
  document.getElementById('detail-title').innerText = `${details.Title}`;
  document.getElementById('detail-released').innerText = `${details.Released}`;
  document.getElementById('detail-plot').innerText = `${details.Plot}`;
  document.getElementById('actors').innerText = `${details.Actors}`;
  document.getElementById('director').innerText = `${details.Director}`;
  document.getElementById('genre').innerText = `${details.Genre}`;

  const ratingsInfo = document.getElementById('ratings-info');
  ratingsInfo.innerHTML ='';

  // 평점 제공사와 결과 함께 보여주기
  for(let i = 0; i < details.Ratings.length; i++){
    const ratingEl = document.createElement('div');
    ratingEl.className = 'rating';
    const logoEl = document.createElement('img');
    logoEl.className = 'logo';
    const resultEl = document.createElement('p');
    resultEl.className = 'result';
    logoEl.src = '/' + `${details.Ratings[i].Source}` + '.png';
    resultEl.textContent = `${details.Ratings[i].Value}`;

    ratingEl.append(logoEl, resultEl);
    ratingsInfo.append(ratingEl);
  }

  posterEl.style.backgroundImage = `url(${details.Poster})`;
  bgEl.style.backgroundImage = `url(${details.Poster})`;
  window.scroll({top: document.body.scrollHeight, left: 0, behavior: 'smooth'});
};