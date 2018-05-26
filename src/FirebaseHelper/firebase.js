import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyBzHnmYO3L8Tmf0je2e77ZFl8CK7-ishaQ',
  authDomain: 'notebook-279fd.firebaseapp.com',
  databaseURL: 'https://notebook-279fd.firebaseio.com',
  projectId: 'notebook-279fd',
  storageBucket: 'notebook-279fd.appspot.com',
  messagingSenderId: '112154712649'
};
const fire = firebase.initializeApp(config);
const auth = firebase.auth();

export { auth, fire as firebase };
