import firebase from "firebase/compat/app";  
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0xzih436i27gxYTnU4XydN6C9xpYixsE",
    authDomain: "challenge-95bb0.firebaseapp.com",
    projectId: "challenge-95bb0",
    storageBucket: "challenge-95bb0.appspot.com",
    messagingSenderId: "285023509374",
    appId: "1:285023509374:web:e9e27003df605b0c6df12f",
    measurementId: "G-5G6MZ9JF9N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { db, auth}