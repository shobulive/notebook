import { FETCH_ALL_FEED, CLEAR_ALL_FEED } from '../Actions/FetchAllFeed';

const initialState = {
  feeds: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_FEED:
      const values = action.payload
        ? Object.values(action.payload).slice()
        : [];
      const keys = action.payload ? Object.keys(action.payload).slice() : [];
      values.map((value, i) => (value['key'] = keys[i]));
      return {
        ...state,
        feeds: values
      };
    case CLEAR_ALL_FEED:
      return initialState;
    default:
      return state;
  }
}
