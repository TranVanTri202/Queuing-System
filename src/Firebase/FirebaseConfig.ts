// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCu73IvXhU32bVdL3ErqIAHdWlWQqKs0Rk",
  authDomain: "project-queuing-caeb4.firebaseapp.com",
  projectId: "project-queuing-caeb4",
  storageBucket: "project-queuing-caeb4.appspot.com",
  messagingSenderId: "633968514924",
  appId: "1:633968514924:web:0d9f8674780614a69e8549",
  measurementId: "G-4SY9LC7M1Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const apiFirebase = getFirestore(app);
export const storage = getStorage(app);
export default apiFirebase;
