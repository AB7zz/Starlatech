import firebase from 'firebase'
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';
import 'firebase/storage'
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfaRGlVRzIpE5u65E2nx03QS_hcTBkX-8",
    authDomain: "starlatech-project-careers.firebaseapp.com",
    databaseURL: "https://starlatech-project-careers-default-rtdb.firebaseio.com",
    projectId: "starlatech-project-careers",
    storageBucket: "starlatech-project-careers.appspot.com",
    messagingSenderId: "1040939573704",
    appId: "1:1040939573704:web:d2f39e66079b7e1a4e20fd",
    measurementId: "G-6YG1383CK0"
});

var db = firebaseApp.firestore();
var storage = firebaseApp.storage();
export {db,storage}