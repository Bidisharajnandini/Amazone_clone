import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf9MgcMHvOPYag-l8Qx3Eg0rH-VEnPWL0",
  authDomain: "clone-8b363.firebaseapp.com",
  projectId: "clone-8b363",
  storageBucket: "clone-8b363.appspot.com",
  messagingSenderId: "25423082745",
  appId: "1:25423082745:web:5ef33612585922e7711e28",
  measurementId: "G-3L94EF8L7X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
