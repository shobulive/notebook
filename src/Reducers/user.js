import {
  FETCH_USER_BY_ID,
  FETCH_USER_FEED,
  CLEAR_USER_FEED,
  CLEAR_USER_DETAILS
} from '../Actions/FetchUserData';

const initialState = {
  userDetails: null,
  userFeed: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_BY_ID:
      return {
        ...state,
        userDetails: action.payload
      };
    case CLEAR_USER_DETAILS:
      return initialState;
    case FETCH_USER_FEED:
      const values = action.payload
        ? Object.values(action.payload).slice()
        : [];
      const keys = action.payload ? Object.keys(action.payload).slice() : [];
      values.map((value, i) => (value['key'] = keys[i]));
      return {
        ...state,
        userFeed: values
      };
    case CLEAR_USER_FEED:
      return initialState;
    default:
      return state;
  }
}
