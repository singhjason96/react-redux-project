import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDelfHH26CbBLTMVWDX6Duz-_YcNyrYhFo",
    authDomain: "clothing-store-165f7.firebaseapp.com",
    databaseURL: "https://clothing-store-165f7.firebaseio.com",
    projectId: "clothing-store-165f7",
    storageBucket: "clothing-store-165f7.appspot.com",
    messagingSenderId: "1077638477127",
    appId: "1:1077638477127:web:0682b2276fb8b1dce44862",
    measurementId: "G-4H2SW6ZCH2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
