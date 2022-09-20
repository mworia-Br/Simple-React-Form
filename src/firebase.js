import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYU7Ry7YnlfvBl4LKIork_AIcRTDZ3gGE",
  authDomain: "jls-react.firebaseapp.com",
  databaseURL: "https://jls-react-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jls-react",
  storageBucket: "jls-react.appspot.com",
  messagingSenderId: "599654946369",
  appId: "1:599654946369:web:800da4c47682174c34d8c0",
  measurementId: "G-BV3KTBKYFH"
});

var db = firebaseApp.firestore();

export { db };
