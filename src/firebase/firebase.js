// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu8aBK0PK4BbMnR31MWJce-WkDwDSD0PY",
  authDomain: "jungpil-9bcfa.firebaseapp.com",
  projectId: "jungpil-9bcfa",
  storageBucket: "jungpil-9bcfa.appspot.com",
  messagingSenderId: "273706216315",
  appId: "1:273706216315:web:b915b10ab8ba944c52ebde",
  measurementId: "G-CCJC8DLR5F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth =  getAuth(app);
export const storage = getStorage();
export const db = getFirestore();