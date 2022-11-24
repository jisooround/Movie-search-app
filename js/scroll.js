export default function scroll () {
  const scrollEl = document.getElementsByClassName('scroll');
  const sections = document.getElementsByClassName('section');
  const introTop = sections[0].offsetTop;
  const mainTop = sections[1].offsetTop;

  // 스크롤 이벤트
scrollEl[0].onclick = function() {
  window.scroll({top:introTop, behavior: 'smooth'});
}
scrollEl[1].onclick = function() {
  window.scroll({top:introTop, behavior: 'smooth'});
}
scrollEl[2].onclick = function() {
  window.scroll({top:mainTop, behavior: 'smooth'});
}
scrollEl[3].onclick = function() {
  window.scroll({top: document.body.scrollHeight, left: 0, behavior: 'smooth'});
}
scrollEl[4].onclick = function() {
  window.scroll({top:mainTop, behavior: 'smooth'});
}
}