
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "roazhon-goal-academy.firebaseapp.com",
  projectId: "roazhon-goal-academy",
  storageBucket: "roazhon-goal-academy.appspot.com",
  messagingSenderId: "1092353873335",
  appId: "1:1092353873335:web:7b67aa3fb68d21e829c432",
  measurementId: "G-N0Z48HLBYJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()