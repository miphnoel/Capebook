import { search } from '../util/user_api_util';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const receiveResults = (results) => ({
  type: RECEIVE_RESULTS,
  results
});

export const fetchSearchResults = (query) => (dispatch) => {
  return search(query)
    .then(results => dispatch(receiveResults(results)));
}
