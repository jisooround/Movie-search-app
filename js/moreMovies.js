export default function moreMovies() {
  const movies = getMovies(page);
    const pageUp = page+1;
    getMovies(pageUp);
    renderMovies(movies);
    console.log('page2');
    const actionDiv = document.createElement('div');
    actionDiv.className = 'main--movie--item--action';
    const moreBtn = document.createElement('button');
    moreBtn.innerHTML = 'More';
    moreBtn.className = 'main--movie--item--action--btn';
    actionDiv.appendChild(moreBtn);
    moreBtn.addEventListener('click', clickMoreBtn);
    return moreMovies; 
}