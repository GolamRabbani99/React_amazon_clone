
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARNeO2C4UmUTJldySMzE4_-omE7_WI-jA",
    authDomain: "app-clone-79f1f.firebaseapp.com",
    projectId: "app-clone-79f1f",
    storageBucket: "app-clone-79f1f.appspot.com",
    messagingSenderId: "195295208314",
    appId: "1:195295208314:web:6ce1e49c851140c26a6cc3",
    measurementId: "G-CKHJHLRVCB"
  };


  //initailise firebase app
   
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
