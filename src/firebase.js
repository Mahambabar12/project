import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3IORe0-p3lB8topHxHJUid8_cUlAGLx8",
  authDomain: "fir-auth-1132-8fe08.firebaseapp.com",
  projectId: "fir-auth-1132-8fe08",
  storageBucket: "fir-auth-1132-8fe08.appspot.com",
  messagingSenderId: "435108350648",
  appId: "1:435108350648:web:0282d5b446613d472e024d",
  measurementId: "G-NRYRQZQMWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };