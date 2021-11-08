import axios from 'axios';
import constants from '../constants';

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(constants.UPCOMING_MOVIES_URL);
    return response.data.results;
  } catch (err) {
    console.err(err);
  }
};
