export function filterByQuery(movies, query) {
    const moviesFilteredByQuery = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase();
      const movieEn = String(movie.nameEN).toLowerCase();
      const queryText = query.toLowerCase();
      return movieRu.includes(queryText) || movieEn.includes(queryText);
    });
    return moviesFilteredByQuery;
  }
  
  export function filterByDuration(movies) {
    return movies.filter((movie) => movie.duration < 40);
  }