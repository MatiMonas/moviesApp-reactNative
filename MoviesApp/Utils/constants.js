import { API_KEY } from '@env';

const API_URL = 'https://api.themoviedb.org/3/';
const GENRES_URL = `${API_URL}discover/movie?with_genres=`;

const constants = {
  POPULAR_MOVIES_URL: `${API_URL}movie/popular?api_key=${API_KEY}`,
  UPCOMING_MOVIES_URL: `${API_URL}movie/upcoming?api_key=${API_KEY}`,
  POPULAR_TV_URL: `${API_URL}tv/popular?api_key=${API_KEY}`,
  FAMILY_MOVIES_URL: `${GENRES_URL}10751&api_key=${API_KEY}`,
  DOCUMENTARY_URL: `${GENRES_URL}99&api_key=${API_KEY}`,
  DETAILS_URL: `${API_URL}movie/`,
};

export default constants;
