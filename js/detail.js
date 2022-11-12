export default function detailPage(movies) {
  for(let movie of movies){
      const bgEl = document.getElementById('detail-bg');

      bgEl.src = `${movie.Poster}`
      console.log('sayHello')
      window.scroll({top: document.body.scrollHeight, left: 0, behavior: 'smooth'});
  };

  // 영화 상세 내용 불러오기
  async function getMovieDetail(id ='') {
  return new Promise((resolve, reject) => {
    fetch(`https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`)
    .then(res => res.json())
    .then(res => resolve(res))
    .then(json => {
      if(json.Response === 'False'){
        reject(json.Error)
      }
      resoleve(json)
    })
    .catch(error => {
      reject(error)
    })
  })
};
};