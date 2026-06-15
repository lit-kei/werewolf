// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS64TaIA2ytLno9P7YnkAofSW8-G-hXrM",
  authDomain: "werewolf-2f979.firebaseapp.com",
  projectId: "werewolf-2f979",
  storageBucket: "werewolf-2f979.firebasestorage.app",
  messagingSenderId: "954317665313",
  appId: "1:954317665313:web:a8b30c1690a1b958eb9f60",
  measurementId: "G-Z7X0Z8T1MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

