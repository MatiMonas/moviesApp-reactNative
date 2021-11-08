import axios from 'axios';
import constants from '../constants';

export const getFamilyMovies = async () => {
  try {
    const response = await axios.get(constants.FAMILY_MOVIES_URL);
    return response.data.results;
  } catch (err) {
    console.err(err);
  }
};
