import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAKHslUnBOH3wkAmFcyzVQWGEWDEwCHDBk",
  authDomain: "christine-ecommerce.firebaseapp.com",
  projectId: "christine-ecommerce",
  databaseURL: "https:// christine-ecommerce.firebaseio.com",
  storageBucket: "christine-ecommerce.appspot.com",
  messagingSenderId: "653111278814",
  appId: "1:653111278814:web:d4d2101599c651fbb3964f",
  measurementId: "G-55VN0H6QQB"
});

var db = firebaseApp.firestore();

export { db };
