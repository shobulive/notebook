import { firebase } from '../FirebaseHelper';

export const FETCH_USER_FEED = 'FETCH_USER_FEED';
export const FETCH_USER_BY_ID = 'FETCH_USER_BY_ID';
export const CLEAR_USER_DETAILS = 'CLEAR_USER_DETAILS';
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
export const clearUserDetails = uID => {
  return (dispatch, getState) => {
    dispatch({ type: CLEAR_USER_DETAILS });
  };
};
export const fetchUserFeedListenerOn = uID => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`feed`)
      .orderByChild('authorID')
      .equalTo(uID)
      .on('value', details =>
        dispatch({ type: FETCH_USER_FEED, payload: details.val() })
      );
  };
};
export const fetchUserFeedListenerOff = uID => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`feed`)
      .off('value');
    dispatch({ type: CLEAR_USER_FEED });
  };
};
