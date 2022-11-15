// 영화 검색 결과 불러오기
export default async function getMovies(title = '', page = 1, type = '', year = '' ) {
  return new Promise((resolve, reject) => {
      fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}&page=${page}&type=${type}&y=${year}`)
        .then(res => res.json())
        .then(res => resolve(res))
        .then(json => {
          if(json.Response === 'False') {
            reject(json.Error)
          }
          resolve(json)
        })
        .catch(error => {
          reject(error)
        })
    })
};