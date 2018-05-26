import { auth } from './firebase';
import { firebase } from '.';
// Sign Up
export const createUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const signInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);
// Sign out
export const signOut = () => auth.signOut();

export const firebaseGetCurrentUser = () => {
  return new Promise(function(resolve, reject) {
    let observer = user => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        reject(user);
      }
    };
    let unsubscribe = firebase.auth().onAuthStateChanged(observer);
  });
};
