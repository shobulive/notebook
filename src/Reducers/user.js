import {
  FETCH_USER_BY_ID,
  FETCH_USER_FEED,
  CLEAR_USER_FEED
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
    case FETCH_USER_FEED:
      return {
        ...state,
        userFeed: action.payload ? Object.values(action.payload) : []
      };
    case CLEAR_USER_FEED:
      return initialState;
    default:
      return state;
  }
}
