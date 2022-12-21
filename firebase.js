import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBkiqoahufkgbyEXGuGtrgwSmdSB19nBcM",
    authDomain: "amazn-clone-1291c.firebaseapp.com",
    projectId: "amazn-clone-1291c",
    storageBucket: "amazn-clone-1291c.appspot.com",
    messagingSenderId: "458808454139",
    appId: "1:458808454139:web:c8a7fdf7ba70cae362795e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db