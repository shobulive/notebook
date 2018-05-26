import { FETCH_ALL_FEED, CLEAR_ALL_FEED } from '../Actions/FetchAllFeed';

const initialState = {
  feeds: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_FEED:
      return {
        ...state,
        feeds: action.payload ? Object.values(action.payload) : []
      };
    case CLEAR_ALL_FEED:
      return initialState;
    default:
      return state;
  }
}
