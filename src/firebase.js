import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCgoGov7nSd1CIcbtg3IDgWDnvxRcp9S4k",
    authDomain: "website-firebase-192f6.firebaseapp.com",
    databaseURL: "https://website-firebase-192f6.firebaseio.com",
    projectId: "website-firebase-192f6",
    storageBucket: "website-firebase-192f6.appspot.com",
    messagingSenderId: "984913669112",
    appId: "1:984913669112:web:7772dbd1a6ef7f2c"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
    firebase,
    firebaseMatches
}