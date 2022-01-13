// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADcNm3fwil0ATDcbX-6us4b6XPHC2twV0",
  authDomain: "clone-cfc7a.firebaseapp.com",
  projectId: "clone-cfc7a",
  storageBucket: "clone-cfc7a.appspot.com",
  messagingSenderId: "552928657911",
  appId: "1:552928657911:web:7917d8fabf6fb4b712eef2",
  measurementId: "G-T8YCV3L1P9",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();
const auth=firebase.auth();

export{db, auth};