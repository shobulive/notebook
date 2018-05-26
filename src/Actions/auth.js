import {
  firebaseGetCurrentUser,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '../FirebaseHelper/auth';
import { firebase } from '../FirebaseHelper';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const PRINT_AUTH_MESSAGE = 'PRINT_AUTH_MESSAGE';
export const CLEAR_AUTH_MESSAGE = 'CLEAR_AUTH_MESSAGE';
export const SET_FIREBASE_UID = 'SET_FIREBASE_UID';
export const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS';
export const SIGN_OUT = 'SIGN_OUT';

export const checkForUserSession = () => {
  return async (dispatch, getState) => {
    try {
      const currentUser = await firebaseGetCurrentUser();
      dispatch(setFirebaseUID(currentUser.uid));
      dispatch(setCurrentUser(currentUser.uid));
    } catch (error) {
      dispatch(updateLoginStatus(false));
    }
  };
};
export const updateLoginStatus = isLoggedIn => {
  return (dispatch, getState) => {
    dispatch({ type: UPDATE_LOGIN_STATUS, payload: isLoggedIn });
  };
};

export const printAuthMessage = message => {
  return (dispatch, getState) => {
    dispatch({
      type: PRINT_AUTH_MESSAGE,
      payload: message
    });
  };
};

export const clearAuthMessage = () => {
  return (dispatch, getState) => {
    dispatch({ type: CLEAR_AUTH_MESSAGE });
  };
};
export const setFirebaseUID = uID => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_FIREBASE_UID,
      payload: uID
    });
  };
};
export const userSignOut = () => {
  return (dispatch, getState) => {
    signOut();
    dispatch({
      type: SIGN_OUT
    });
  };
};
export const setCurrentUser = uID => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`users/${uID}`)
      .on(
        'value',
        snap => {
          dispatch({ type: SET_CURRENT_USER, payload: snap.val() });
          dispatch(updateLoginStatus(true));
        },
        () => {
          dispatch(
            printAuthMessage({
              type: 'error',
              message: 'Error getting current user'
            })
          );
        }
      );
  };
};
export const setUserData = (fName, lName, gender, dob, uID) => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`users/${uID}`)
      .set({ fName, lName, gender, dob }, error => {
        if (!error) {
          dispatch(
            printAuthMessage({
              type: 'message',
              message: 'Account successfully created.'
            })
          );
          dispatch(setCurrentUser(uID));
        } else
          dispatch(
            printAuthMessage({
              type: 'error',
              message: 'Error Writing auth data'
            })
          );
      });
  };
};
export const userSignIn = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const currentUser = await signInWithEmailAndPassword(email, password);
      dispatch(clearAuthMessage());
      dispatch(setFirebaseUID(currentUser.user.uid));
      dispatch(setCurrentUser(currentUser.user.uid));
    } catch (error) {
      dispatch(
        printAuthMessage({
          type: 'error',
          message: 'Username and password do not match. Please try again.'
        })
      );
    }
  };
};

export const userSignUp = (
  fName,
  lName,
  email,
  password,
  confirmPassword,
  gender,
  dob
) => {
  return async (dispatch, getState) => {
    clearAuthMessage();
    if (
      !fName ||
      !lName ||
      !email ||
      !password ||
      !confirmPassword ||
      !gender ||
      !dob
    ) {
      dispatch(
        printAuthMessage({
          type: 'error',
          message: 'Please fill all the fields to proceed.'
        })
      );
    } else if (password !== confirmPassword) {
      dispatch(
        printAuthMessage({
          type: 'error',
          message: 'Password do not match.'
        })
      );
    } else {
      try {
        const currentUser = await createUserWithEmailAndPassword(
          email,
          password
        );
        dispatch(setFirebaseUID(currentUser.user.uid));
        dispatch(setUserData(fName, lName, gender, dob, currentUser.user.uid));
      } catch (error) {
        dispatch(
          printAuthMessage({
            type: 'error',
            message: 'Error creating new user'
          })
        );
      }
    }
  };
};
