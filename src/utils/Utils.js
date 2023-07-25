export function filterByQuery(movies, query) {
    const moviesFilteredByQuery = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      const queryText = query.toLowerCase().trim();
      return movieRu.includes(queryText) || movieEn.includes(queryText);
    });
    return moviesFilteredByQuery;
  }
  
  export function filterByDuration(movies) {
    return movies.filter((movie) => movie.duration < 40);
  }