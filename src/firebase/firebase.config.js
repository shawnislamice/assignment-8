// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDIZDDRJ182XFg5KA0Ez2CXU3ntF2TZ0c",
  authDomain: "book-auth-d2155.firebaseapp.com",
  projectId: "book-auth-d2155",
  storageBucket: "book-auth-d2155.appspot.com",
  messagingSenderId: "278039208563",
  appId: "1:278039208563:web:7146220abc290a4e808006",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
