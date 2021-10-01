// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJpHse9n27DxUQHBrVqUZiE8wK68js8_s",
  authDomain: "disney-plus-clone-badbd.firebaseapp.com",
  projectId: "disney-plus-clone-badbd",
  storageBucket: "disney-plus-clone-badbd.appspot.com",
  messagingSenderId: "1052149561185",
  appId: "1:1052149561185:web:94d9151562e0f2efa57720",
  measurementId: "G-8FTMHM4MQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
// const analytics = getAnalytics(app);

export {auth, provider, storage, signInWithPopup };
export default db;