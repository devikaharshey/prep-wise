import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsC5fhY6TEMF5NJq_KaPi-zr9PrFjE3dc",
  authDomain: "prep-wise-app.firebaseapp.com",
  projectId: "prep-wise-app",
  storageBucket: "prep-wise-app.firebasestorage.app",
  messagingSenderId: "327066490502",
  appId: "1:327066490502:web:6d0682f2d17a0d3de6a307",
  measurementId: "G-TVGDGY4BPJ",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
