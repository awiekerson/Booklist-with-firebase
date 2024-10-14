import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBzg52RPeI_Rqeq3bazLxVzY36YrZKAX2c",
  authDomain: "book-list-with-firebase-8e855.firebaseapp.com",
  projectId: "book-list-with-firebase-8e855",
  storageBucket: "book-list-with-firebase-8e855.appspot.com",
  messagingSenderId: "548995867739",
  appId: "1:548995867739:web:f003d1c0692a15c18e8b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

