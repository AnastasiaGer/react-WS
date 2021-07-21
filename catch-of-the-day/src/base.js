import Rebase from "re-base";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB9UcCqteUhGOFGUQe80rqOMNxkHKbTh9s",
  authDomain: "catch-of-the-day-ag-52be2.firebaseapp.com",
  projectId: "catch-of-the-day-ag-52be2",
  storageBucket: "catch-of-the-day-ag-52be2.appspot.com",
  messagingSenderId: "476460572731",
  appId: "1:476460572731:web:c45bef6c950a479eb8fc1e",
  measurementId: "G-8KT6ECQLTZ",
  databaseURL: "https://catch-of-the-day-ag-52be2-default-rtdb.firebaseio.com/"
};
var firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
