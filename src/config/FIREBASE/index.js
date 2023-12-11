import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBcDtI2tCln85LJXAur59kEg4UFca2HgVU",
    authDomain: "noteapp-2a5f0.firebaseapp.com",
    projectId: "noteapp-2a5f0",
    storageBucket: "noteapp-2a5f0.appspot.com",
    messagingSenderId: "448749316151",
    appId: "1:448749316151:web:696409aae1760ef1d077b2"
});

const FIREBASE = firebase;

export default FIREBASE;

