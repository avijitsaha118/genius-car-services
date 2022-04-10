// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1jSF3XmCVyyixwFilpLu68jLKrp57X3k",
  authDomain: "genius-car-services-6ac17.firebaseapp.com",
  projectId: "genius-car-services-6ac17",
  storageBucket: "genius-car-services-6ac17.appspot.com",
  messagingSenderId: "465630630038",
  appId: "1:465630630038:web:3efc86554bcf592e9172b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;