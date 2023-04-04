// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi8qxH-4FAnBbpYwd-vn5C6W8-SyUZDiY",
  authDomain: "mini-chat-app-6e5da.firebaseapp.com",
  projectId: "mini-chat-app-6e5da",
  storageBucket: "mini-chat-app-6e5da.appspot.com",
  messagingSenderId: "35900419029",
  appId: "1:35900419029:web:dee6ae893651fce8fc2b5c",
  measurementId: "G-Y44KX0S0Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)