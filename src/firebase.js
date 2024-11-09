// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfWcthO2M9XNLMZsDNzo-7khWTEP978GM",
    authDomain: "ecom-auth-zustand.firebaseapp.com",
    projectId: "ecom-auth-zustand",
    storageBucket: "ecom-auth-zustand.firebasestorage.app",
    messagingSenderId: "827751651610",
    appId: "1:827751651610:web:952eb57048794a07df34a3",
    measurementId: "G-8XFQL08K8G"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
