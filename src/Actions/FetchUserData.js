import { firebase } from '../FirebaseHelper';

export const FETCH_USER_BY_ID = 'FETCH_USER_BY_ID';
export const FETCH_USER_FEED = 'FETCH_USER_FEED';
export const CLEAR_USER_FEED = 'CLEAR_USER_FEED';

export const fetchUserDetails = uID => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`users/${uID}`)
      .once('value')
      .then(details =>
        dispatch({ type: FETCH_USER_BY_ID, payload: details.val() })
      );
  };
};
export const fetchUserFeedListenerOn = uID => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`feed/${uID}`)
      .on('value', details =>
        dispatch({ type: FETCH_USER_FEED, payload: details.val() })
      );
  };
};
export const fetchUserFeedListenerOff = uID => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`feed/${uID}`)
      .off('value');
    dispatch({ type: CLEAR_USER_FEED });
  };
};
