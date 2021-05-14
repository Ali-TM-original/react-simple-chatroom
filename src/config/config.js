import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAf4Jy987bE9PE5NLFB7oL1UTvHvWMFVUE",
    authDomain: "chatroom-826ea.firebaseapp.com",
    projectId: "chatroom-826ea",
    storageBucket: "chatroom-826ea.appspot.com",
    messagingSenderId: "1097497890314",
    appId: "1:1097497890314:web:e50648cf5f49af436199f3",
    measurementId: "G-0GRFH89QD9"
});

const db = firebaseApp.firestore();
export default db;