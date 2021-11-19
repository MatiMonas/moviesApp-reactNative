import axios from 'axios';
import constants from '../constants';
import { API_KEY } from '@env';

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(
      `${constants.DETAILS_URL}${id}?api_key=${API_KEY}`,
    );

    return response.data;
  } catch (err) {
    console.error(err);
  }
};
