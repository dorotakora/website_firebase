import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyCgoGov7nSd1CIcbtg3IDgWDnvxRcp9S4k",
    authDomain: "website-firebase-192f6.firebaseapp.com",
    databaseURL: "https://website-firebase-192f6.firebaseio.com",
    projectId: "website-firebase-192f6",
    storageBucket: "website-firebase-192f6.appspot.com",
    messagingSenderId: "984913669112",
    appId: "1:984913669112:web:7772dbd1a6ef7f2c"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebaseDB,
    firebasePlayers
}
