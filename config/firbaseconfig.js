// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQBUL6wGiV6pNyjpVcciLQPF9fHumvSB8",
  authDomain: "travel-5f370.firebaseapp.com",
  projectId: "travel-5f370",
  storageBucket: "travel-5f370.appspot.com",
  messagingSenderId: "197790087149",
  appId: "1:197790087149:web:8c634ee7f21a64c4e7d9e4",
  measurementId: "G-BPNQ7XRS87"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);