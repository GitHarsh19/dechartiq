import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZnZbJpmho7yhE0SCkJXoaufx9cResAP8",
  authDomain: "dechartiq.firebaseapp.com",
  projectId: "dechartiq",
  storageBucket: "dechartiq.appspot.com",
  messagingSenderId: "295440042897",
  appId: "1:295440042897:web:bc91103a1612e2b7b5e830"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };