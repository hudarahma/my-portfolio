// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyD9380d1GksU-7Jb_VZXN92KBbOCDl7Q6o",
    authDomain: "h-dev-portfolio.firebaseapp.com",
    projectId: "h-dev-portfolio",
    storageBucket: "h-dev-portfolio.appspot.com",
    messagingSenderId: "813162065822",
    appId: "1:813162065822:web:f37f1e6750df366b9b308f",
    measurementId: "G-BBBCFL7BHR"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };

export default firebase;