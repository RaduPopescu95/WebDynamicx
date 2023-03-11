// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApL6NKBvCqvKq_mq6aXFAJBc-8NekG0Oo",
  authDomain: "webdynamicx-d16a1.firebaseapp.com",
  projectId: "webdynamicx-d16a1",
  storageBucket: "webdynamicx-d16a1.appspot.com",
  messagingSenderId: "1088741695274",
  appId: "1:1088741695274:web:5373d01c64cb3099fc4853",
  measurementId: "G-W1G7274CCF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
