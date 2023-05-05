// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// (11:29)
// THIS IS HOW I ACCESS THE ENVIORMENT VARIABLES IN MY 
// JS FILE FROM MY .env.local file 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};
// save and restart server after all this
// check termianl to see if it loaded the env file

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}// i export db so i can use this in other files.


// (14:08) creates fireStore database
//refresh page if error occurs.

// (14:43) after creating my firestore database and
// changing rules from if false to true
// by default it is false because firebase wants my database to be as secure as possible.

// (15:14) in the data section firebase start a collection and createa todos collection
// add Auto-ID
// add 2 fields title and detail

// (16:35)
// i need access my cloud firestore database

// i do that by going to my firebase.js file and import a function
// import {getFirestore} from "firebase/firestore";

// then add const db = get Firestore(app) under Initialize Firebase
