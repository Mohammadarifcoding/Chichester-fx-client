// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzN32uOmLC19qSD0yIc5FGx8UWhgsU-vs",
  authDomain: "chichester-fx.firebaseapp.com",
  projectId: "chichester-fx",
  storageBucket: "chichester-fx.firebasestorage.app",
  messagingSenderId: "505590747963",
  appId: "1:505590747963:web:bf0fe11137a66fd86c5d1e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)

export default Auth
