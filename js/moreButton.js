export default async function moreButton() {
  const actionDiv = document.createElement('div');
  actionDiv.className = 'main--movie--item--action';
  const moreBtn = document.createElement('button');
  moreBtn.innerHTML = 'More';
  moreBtn.id = 'båtn'
  moreBtn.className = 'main--movie--item--action--btn';
  actionDiv.appendChild(moreBtn);
  movieFeed.appendChild(actionDiv);
  return actionDiv;
}