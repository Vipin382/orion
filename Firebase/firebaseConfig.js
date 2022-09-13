// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLmlSX4nZmtympXnB4GTXZ6YCEeaTp1B0",
  authDomain: "orion-ea205.firebaseapp.com",
  projectId: "orion-ea205",
  storageBucket: "orion-ea205.appspot.com",
  messagingSenderId: "605352011641",
  appId: "1:605352011641:web:068925e7401205813ef1a8",
  measurementId: "G-H6S959176N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
//const analytics = getAnalytics(app);
