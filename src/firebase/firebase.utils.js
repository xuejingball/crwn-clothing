import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0mj7BU4jweBDRbaK1we3fuH6bl81aKqE",
    authDomain: "crwn-db-267ca.firebaseapp.com",
    databaseURL: "https://crwn-db-267ca.firebaseio.com",
    projectId: "crwn-db-267ca",
    storageBucket: "crwn-db-267ca.appspot.com",
    messagingSenderId: "693074530323",
    appId: "1:693074530323:web:1bec2cb0424b4798676fe6",
    measurementId: "G-E3Q0FJ6469"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
