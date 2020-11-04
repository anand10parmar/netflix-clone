import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDTj2cptHDHkLG18ygR02AHj3NAPmVuG1A",
    authDomain: "netflix-clone-b846f.firebaseapp.com",
    databaseURL: "https://netflix-clone-b846f.firebaseio.com",
    projectId: "netflix-clone-b846f",
    storageBucket: "netflix-clone-b846f.appspot.com",
    messagingSenderId: "820738988163",
    appId: "1:820738988163:web:e028a489185f76e45063b6"
};

const firebase = Firebase.initializeApp(config);

export { firebase };