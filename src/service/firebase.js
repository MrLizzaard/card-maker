import firebase from "firebase";
import "firebase/auth";
import * as firebase_data from "./config";

let config = {
  apiKey: firebase_data.FIREBASE_API,

  authDomain: firebase_data.FIREBASE_DOMAIN,

  databaseURL: firebase_data.FIREBASE_DATABASE_URL,

  projectId: "business-card-maker-7ff0f",

  storageBucket: "business-card-maker-7ff0f.appspot.com",

  messagingSenderId: firebase_data.FIREBASE_MESSAGE_SENDER,

  appId: firebase_data.FIREBASE_APP_ID,

  measurementId: firebase_data.FIREBASE_MEASURMENT_ID,
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
