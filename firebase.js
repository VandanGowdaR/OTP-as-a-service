// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";

//import firebase from 'firebase/app';
import firebase from 'firebase'
require('firebase/auth')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACwksWSLODq2i0JYe99hh4JjgrIGvpOqA",
  authDomain: "myappdemo-c27b0.firebaseapp.com",
  projectId: "myappdemo-c27b0",
  storageBucket: "myappdemo-c27b0.appspot.com",
  messagingSenderId: "924524169695",
  appId: "1:924524169695:web:ed44f400da724610b49c6a"
};

// Initialize Firebase
  
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth , firebase};

