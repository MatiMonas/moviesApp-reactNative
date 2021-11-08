import axios from 'axios';
import constants from '../constants';

export const getPopularTv = async () => {
  try {
    const response = await axios.get(constants.POPULAR_TV_URL);
    return response.data.results;
  } catch (err) {
    console.err(err);
  }
};
