import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

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
export const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }