import { firebase } from '../FirebaseHelper';

export const FETCH_ALL_FEED = 'FETCH_ALL_FEED';
export const CLEAR_ALL_FEED = 'CLEAR_ALL_FEED';
export const fetchAllFeedListenerOn = () => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`feed`)
      .orderByChild('timestamp')
      .on('value', snap => {
        const feeds = snap.val();
        dispatch({ type: FETCH_ALL_FEED, payload: feeds });
      });
  };
};
export const fetchAllFeedListenerOff = () => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`feed`)
      .off('value');
    dispatch({ type: CLEAR_ALL_FEED });
  };
};
