import axios from 'axios';
import constants from '../constants';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(constants.POPULAR_MOVIES_URL);
    return response.data.results;
  } catch (err) {
    console.err(err);
  }
};
