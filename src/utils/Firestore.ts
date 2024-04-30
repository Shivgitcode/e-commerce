import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAm2R34kJV-8cwqt26Zif8ImZOrR1mAatY",
    authDomain: "e-commerce-81e90.firebaseapp.com",
    projectId: "e-commerce-81e90",
    storageBucket: "e-commerce-81e90.appspot.com",
    messagingSenderId: "56650299537",
    appId: "1:56650299537:web:9429f2e25fa355db2a2730",
    measurementId: "G-ZX1R9QH448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
