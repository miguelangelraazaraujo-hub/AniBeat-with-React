import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLWSn8Uc5rlOCHNwylXzjLd6wQtKjNBhE",
    authDomain: "anibeat-with-react.firebaseapp.com",
    projectId: "anibeat-with-react",
    storageBucket: "anibeat-with-react.firebasestorage.app",
    messagingSenderId: "706277349661",
    appId: "1:706277349661:web:d2e076844d7e151b86e9f4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);