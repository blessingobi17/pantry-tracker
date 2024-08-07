// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeuhm_2deG-cYuebg5uhM7uWDyfVU0d-s",
  authDomain: "expense-tracker-7f99e.firebaseapp.com",
  projectId: "expense-tracker-7f99e",
  storageBucket: "expense-tracker-7f99e.appspot.com",
  messagingSenderId: "893403514256",
  appId: "1:893403514256:web:faf5ac502c5591ecbe1f15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
