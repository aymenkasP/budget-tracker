import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 const firebaseConfig = {
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export const db = firebase.firestore();
 export const FieldValue = firebase
 export const auth = firebase.auth();
