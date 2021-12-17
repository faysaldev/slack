import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwO8o_OvpmIZPDgwIMEvAaWFJtkM8yOXg",
    authDomain: "slack-clone-48bf7.firebaseapp.com",
    projectId: "slack-clone-48bf7",
    storageBucket: "slack-clone-48bf7.appspot.com",
    messagingSenderId: "336615936816",
    appId: "1:336615936816:web:1df018f5dd02be92fc2ef5",
    measurementId: "G-W3412FPC95"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};