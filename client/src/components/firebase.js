// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGAEzzgxO-igFGYaUJLOLrmOZSrK7YUPQ",
  authDomain: "proquest-8376e.firebaseapp.com",
  projectId: "proquest-8376e",
  storageBucket: "proquest-8376e.appspot.com",
  messagingSenderId: "966011947336",
  appId: "1:966011947336:web:aa378d903835b9de23cb7d",
  measurementId: "G-C3SJKJHTYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);