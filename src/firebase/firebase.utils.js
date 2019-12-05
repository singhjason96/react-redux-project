import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAJH5bjeJDppH-LI4d8Lzan9ln1PKe0K2E",
  authDomain: "clothing-prod.firebaseapp.com",
  databaseURL: "https://clothing-prod.firebaseio.com",
  projectId: "clothing-prod",
  storageBucket: "clothing-prod.appspot.com",
  messagingSenderId: "588706160552",
  appId: "1:588706160552:web:93cf6cdb227ee3b8f2479d",
  measurementId: "G-1XFFKB3CB3"
};

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get();
 

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData

        })

      } catch (error) {

        console.log('error creating user', error.message);

      }
    }
    return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    })

    return await batch.commit()
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
