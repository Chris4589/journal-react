// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh9YNROkY5iLbIRpsPWj43m36s65pp1Vk",
  authDomain: "react-apps-cd52f.firebaseapp.com",
  projectId: "react-apps-cd52f",
  storageBucket: "react-apps-cd52f.appspot.com",
  messagingSenderId: "788447440303",
  appId: "1:788447440303:web:3b07d8e80df74622d4535a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuth = new firebase.auth.GoogleAuthProvider();
export { db, googleAuth, firebase };

