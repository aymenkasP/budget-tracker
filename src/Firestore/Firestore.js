import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 const firebaseConfig = {
    apiKey: "AIzaSyBDJ36J7NdaWbN2T-MURaWgsSTPlinix8g",
    authDomain: "learning-firestore-ef4a6.firebaseapp.com",
    projectId: "learning-firestore-ef4a6",
    storageBucket: "learning-firestore-ef4a6.appspot.com",
    messagingSenderId: "1017955442766",
    appId: "1:1017955442766:web:c8ed7e73f89bb4f78d631f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export const db = firebase.firestore();
 export const auth = firebase.auth();
