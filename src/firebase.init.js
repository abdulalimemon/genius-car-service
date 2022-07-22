// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDciqEZGsOL9rAjAgO0fNjvFznTEgEiR5E",
    authDomain: "genius-car-services-11.firebaseapp.com",
    projectId: "genius-car-services-11",
    storageBucket: "genius-car-services-11.appspot.com",
    messagingSenderId: "371238414232",
    appId: "1:371238414232:web:dfff215158e79c21812ded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;