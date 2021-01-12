import firebase from 'firebase';

const firebaseConfig = {
    // PUT CONFIG FROM FIREBASE HERE
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.firestore();