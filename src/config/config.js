import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "KEY",
    authDomain: "KEY",
    projectId: "KEY",
    storageBucket: "KEY",
    messagingSenderId: "KEY",
    appId: "KEY",
    measurementId: "KEY"
});

const db = firebaseApp.firestore();
export default db;
