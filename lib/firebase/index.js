// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvpqCrrTkZSelEtAxh-rohT4X0DBg8Kos",
    authDomain: "finance-tracker-d062a.firebaseapp.com",
    projectId: "finance-tracker-d062a",
    storageBucket: "finance-tracker-d062a.appspot.com",
    messagingSenderId: "367596351580",
    appId: "1:367596351580:web:07fd4de9c178ad30657699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export{app, db, auth};