import axios from 'axios';
import {
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from './contactsSlice';

axios.defaults.baseURL =
  'https://62584f320c918296a49543e7.mockapi.io/phonebook';
export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response)); // response.data
  } catch (e) {
    dispatch(fetchingError(e)); // e.message
  }
};
