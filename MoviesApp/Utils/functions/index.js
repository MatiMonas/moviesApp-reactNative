import { getPopularMovies } from './getPopularMovies';
import { getUpcomingMovies } from './getUpcomingMovies';
import { getPopularTv } from './getPopularTv';
import { getFamilyMovies } from './getFamilyMovies';
import { getDocumentarys } from './getDocumentarys';

// Puttin all functions to a promise to make it more efficient
const getData = () => {
  return Promise.all([
    getUpcomingMovies(),
    getPopularMovies(),
    getPopularTv(),
    getFamilyMovies(),
    getDocumentarys(),
  ]);
};

export { getData };
