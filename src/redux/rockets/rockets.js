// import { Axios } from 'axios';

const FETCH_ROCKET = 'space_travelers_hub/rockets/FETCH_ROCKET';
const BOOK_ROCKET = 'space_travelers_hub/rockets/BOOK_ROCKET';

// actions

const fetchRocket = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

export default bookRocket;

//   APIs-functions

export const fetchRocketApi = () => async (dispatch) => {
  dispatch(fetchRocket());
};
