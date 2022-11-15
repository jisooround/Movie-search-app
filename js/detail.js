import getDetail from "./getDetail.js";
import renderDetail from "./renderDetail.js";

export default async function detail(movie) {
        const id = movie.imdbID;
          try {
            const details = await getDetail(id);
            console.log(details);
            console.log('detail : '+id);
            renderDetail(details);
          } catch (error) {
            console.log(error)
          }
      };