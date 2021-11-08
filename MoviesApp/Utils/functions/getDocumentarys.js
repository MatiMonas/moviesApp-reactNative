import axios from 'axios';
import constants from '../constants';

export const getDocumentarys = async () => {
  try {
    const response = await axios.get(constants.DOCUMENTARY_URL);
    return response.data.results;
  } catch (err) {
    console.err(err);
  }
};
