import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Firebase keys
const firebaseConfig = {
    apiKey: "AIzaSyBfmCeHheyTQkvvDwB8l2CVSyqAnA3iGHg",
    authDomain: "partymanagement-9009a.firebaseapp.com",
    projectId: "partymanagement-9009a",
    storageBucket: "partymanagement-9009a.appspot.com",
    messagingSenderId: "524293015540",
    appId: "1:524293015540:web:b0401beb99ddccef15dba1",
    measurementId: "G-BGR2SMJ68Z"
};

//Apply config to firebase
const app = initializeApp(firebaseConfig);

//Authentication(Login/SignUp)
export const auth = getAuth(app);
//FireStore (Database)
export const db = getFirestore();

//Export firebase with config
export default app;