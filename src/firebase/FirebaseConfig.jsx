
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import   {getAuth}       from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeM2LfCWBMIg5VE3HBgYrLLwkANDvFHb4",
  authDomain: "myfirstapp-c62df.firebaseapp.com",
  projectId: "myfirstapp-c62df",
  storageBucket: "myfirstapp-c62df.appspot.com",
  messagingSenderId: "640574256301",
  appId: "1:640574256301:web:65a4c7cfc1964111598224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB=getFirestore(app);
const auth=getAuth(app);
export {fireDB,auth}