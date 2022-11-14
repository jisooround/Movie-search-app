import getMovieDetail from "./getMovieDetail.js";
import renderDetail from "./renderDetail.js";

export default async function movieDetail(movie) {
        const id = movie.imdbID;
          try {
            const details = await getMovieDetail(id);
            console.log(details);
            console.log('detail : '+id);
            renderDetail(details);
          } catch (error) {
            console.log(error)
          }
      };