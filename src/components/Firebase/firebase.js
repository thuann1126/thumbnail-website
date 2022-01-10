import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDfV4hmQYAhbZYGFuBSG7Zb1Bc2bBTqszU",
  authDomain: "thumbnail-web-database.firebaseapp.com",
  databaseURL: "https://thumbnail-web-database-default-rtdb.firebaseio.com",
  projectId: "thumbnail-web-database",
  storageBucket: "thumbnail-web-database.appspot.com",
  messagingSenderId: "59089003808",
  appId: "1:59089003808:web:869f09194e025710caa345",
  measurementId: "G-D4WG2HDPL6",
})

export const auth = app.auth()
export const db = firebase.firestore();
export default app
