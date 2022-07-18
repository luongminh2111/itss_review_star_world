// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFeJQRxEQYWNiGpUv4sibDSclBdOmsRzQ",
  authDomain: "itss-word-review.firebaseapp.com",
  databaseURL: "https://itss-word-review-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "itss-word-review",
  storageBucket: "itss-word-review.appspot.com",
  messagingSenderId: "88268407369",
  appId: "1:88268407369:web:11ffaf90f28fcc3df43598",
  measurementId: "G-16F4JD49H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;