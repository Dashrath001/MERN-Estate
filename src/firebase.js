// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7571c.firebaseapp.com",
  projectId: "mern-estate-7571c",
  storageBucket: "mern-estate-7571c.appspot.com",
  messagingSenderId: "1068181665420",
  appId: "1:1068181665420:web:3ee2eaff85e2b4c66deda9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);