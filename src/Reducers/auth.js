import {
  SET_CURRENT_USER,
  PRINT_AUTH_MESSAGE,
  CLEAR_AUTH_MESSAGE,
  SET_FIREBASE_UID,
  UPDATE_LOGIN_STATUS,
  SIGN_OUT
} from '../Actions/auth';
import faker from 'faker/locale/en';
const initialState = {
  currentUser: null,
  message: null,
  uID: null,
  isLoggedIn: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          ...action.payload,
          profilePic: faker.image.avatar(),
          coverPhoto: faker.image.abstract(313)
        },
        isLoggedIn: true
      };
    case SIGN_OUT:
      return initialState;
    case PRINT_AUTH_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case CLEAR_AUTH_MESSAGE:
      return {
        ...state,
        message: null
      };
    case SET_FIREBASE_UID:
      return {
        ...state,
        uID: action.payload
      };
    case UPDATE_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    default:
      return state;
  }
}
