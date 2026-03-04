// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Using Vite env vars (safer than hard-coding)
const firebaseConfig = {
  apiKey: "AIzaSyCirsd8ESkRMo3Hgc3TWWCieoj95Rm1Pxo",
  authDomain: "aubree-ecommerce.firebaseapp.com",
  projectId: "aubree-ecommerce",
  storageBucket: "aubree-ecommerce.firebasestorage.app",
  messagingSenderId: "603229051971",
  appId: "1:603229051971:web:09a73d65ae885fcd3e48f6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
