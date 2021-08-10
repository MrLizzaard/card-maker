import firebase from "firebase";

const API = process.env.REACT_APP_FIREBASE_API_KEY;

let config = {
  apiKey: API,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,

  projectId: "business-card-maker-7ff0f",

  storageBucket: "business-card-maker-7ff0f.appspot.com",

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSANGE_SENDER,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
