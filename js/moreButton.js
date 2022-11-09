export default async function moreButton() {
  const actionDiv = document.createElement('div');
  actionDiv.className = 'main--movie--item--action';
  const moreBtn = document.createElement('button');
  moreBtn.innerHTML = 'More';
  moreBtn.id = 'bbtn'
  moreBtn.className = 'main--movie--item--action--btn';
  actionDiv.appendChild(moreBtn);
  movieFeed.appendChild(actionDiv);

  // 클릭 이벤트
  moreBtn.addEventListener('click', (page) => {
    page++;
    return page;
  })
  return actionDiv;
}