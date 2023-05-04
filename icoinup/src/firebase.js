import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfMLD6dqbdGns9_Qn4eh1rlt4e8dcG064",
  authDomain: "icoinup-a85fb.firebaseapp.com",
  projectId: "icoinup-a85fb",
  storageBucket: "icoinup-a85fb.appspot.com",
  messagingSenderId: "957457715136",
  appId: "1:957457715136:web:1c9769e50e39ecbe310225",
  measurementId: "G-S61Y5YX8K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}