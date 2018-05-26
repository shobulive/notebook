import { firebase } from '../FirebaseHelper';

export const FETCH_ALL_FEED = 'FETCH_ALL_FEED';
export const CLEAR_ALL_FEED = 'CLEAR_ALL_FEED';
export const fetchAllFeedListenerOn = () => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`feed`)
      .on('value', snap => {
        const feeds = Object.values(snap.val());
        let finalFeed = {};
        feeds.forEach(userFeed => {
          finalFeed = { ...finalFeed, userFeed };
        });
        dispatch({ type: FETCH_ALL_FEED, payload: finalFeed });
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
