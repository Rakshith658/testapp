import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBdEke2AiNvF5j6XcFSUc5i4LHEjHO1z7U",
    authDomain: "testapp-79d5b.firebaseapp.com",
    projectId: "testapp-79d5b",
    storageBucket: "testapp-79d5b.appspot.com",
    messagingSenderId: "34309590504",
    appId: "1:34309590504:web:4ec58a5620b580e2a1685d",
    measurementId: "G-QPQ367EYN2"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,storage,provider}