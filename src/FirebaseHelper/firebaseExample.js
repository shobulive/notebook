// Rename this file all file to firebase.js and add your firebase credientials in the config variable
// Also enable email auth and read/write permissiong to access dB
import * as firebase from 'firebase';
const config = {
  apiKey: 'MY_FIREBASE_API_KEY',
  authDomain: 'MY_FIREBASE_AUTH_DOMAIN',
  databaseURL: 'MY_FIREBASE_DB_URL',
  projectId: 'MY_FIREBASE_PROJECT_ID',
  storageBucket: 'MY_FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'MY_FIREBASE_MESSANGING_SENDER_ID'
};
const fire = firebase.initializeApp(config);
const auth = firebase.auth();

export { auth, fire as firebase };
