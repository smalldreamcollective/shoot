import firebase from 'firebase';

export const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
}, 
'Film Tools');

export const db = firebase.database(app);
