import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqQAxH67l8B62-GPcsuj_HvPTI9J9BET8",
    authDomain: "line-clone-42d0c.firebaseapp.com",
    projectId: "line-clone-42d0c",
    storageBucket: "line-clone-42d0c.appspot.com",
    messagingSenderId: "1013432886092",
    appId: "1:1013432886092:web:8a18bd2910dbc123c525e9"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };