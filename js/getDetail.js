    // 영화 상세 내용 불러오기
    export default async function getDetail(id = '') {
      return new Promise((resolve, reject) => {
        fetch(`https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=sho`)
        .then(res => res.json())
        .then(res => resolve(res))
        .then(json => {
          if(json.Response === 'False'){
          reject(json.Error)
          }
          resolve(json)
          })
          .catch(error => {
          reject(error)
      })
    })
  };