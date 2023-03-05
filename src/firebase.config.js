// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxH-5iNqbB4PX-JYjwCYXXmqdnfe6KR2Q",
  authDomain: "house-marketplace-app-93323.firebaseapp.com",
  projectId: "house-marketplace-app-93323",
  storageBucket: "house-marketplace-app-93323.appspot.com",
  messagingSenderId: "611669616505",
  appId: "1:611669616505:web:f007c0e017258b3fd3f1a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()