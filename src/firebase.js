// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHgenCdBpoFUwKvfn6dYZqGF0ywSvnMLw",
  authDomain: "arty-portal.firebaseapp.com",
  projectId: "arty-portal",
  storageBucket: "arty-portal.firebasestorage.app",
  messagingSenderId: "812066883347",
  appId: "1:812066883347:web:f82a3e6a49375431333ce6"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence); // ✅ ensures session is remembered
const db = getFirestore(app);

export { auth, db };
