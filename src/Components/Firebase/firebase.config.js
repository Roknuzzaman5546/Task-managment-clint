// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvsS2yIFqgL8BObzNl3rqLx4uel7gj2hg",
  authDomain: "task-managment-dd197.firebaseapp.com",
  projectId: "task-managment-dd197",
  storageBucket: "task-managment-dd197.appspot.com",
  messagingSenderId: "545149446004",
  appId: "1:545149446004:web:72a89fc44cf7fad3aaee21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);