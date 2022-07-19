import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

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
const analytics = getAnalytics(app);
export const storage = getStorage(app);

export default app;