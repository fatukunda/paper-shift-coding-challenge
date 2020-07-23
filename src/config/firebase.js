import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase configurations
const config = {
  apiKey: "AIzaSyBAx90b9C8E2nQz7i6kN87lRtdRFqsI8PE",
  authDomain: "papershift1.firebaseapp.com",
  databaseURL: "https://papershift1.firebaseio.com",
  projectId: "papershift1",
  storageBucket: "papershift1.appspot.com",
  messagingSenderId: "604477859493",
  appId: "1:604477859493:web:011b9f02e1641524390f4c"
};
// Initialize firebase app

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const { currentUser } = auth;

// firebase collections
const usersCollection = db.collection("users");
const productsCollection = db.collection("products");
export { db, auth, usersCollection, productsCollection, currentUser };
