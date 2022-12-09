import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBh41OyFfuhr2hzXlVZ9bmKNShfpzmKTIY",
    authDomain: "auth-white-label.firebaseapp.com",
    databaseURL: "https://auth-white-label-default-rtdb.firebaseio.com",
    projectId: "auth-white-label",
    storageBucket: "auth-white-label.appspot.com",
    messagingSenderId: "463991557211",
    appId: "1:463991557211:web:ee766e4d4bdab0fd8dc37e",
    measurementId: "G-YGWB0E4MXC",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.getDatabase = getDatabase();
}

export { firebase };
