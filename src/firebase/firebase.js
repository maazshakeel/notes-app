// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlTBeU36BFndJ4tHRnxu486z9msGHFmXQ",
  authDomain: "notes-app-react-native-49e26.firebaseapp.com",
  projectId: "notes-app-react-native-49e26",
  storageBucket: "notes-app-react-native-49e26.appspot.com",
  messagingSenderId: "219743280825",
  appId: "1:219743280825:web:ea27a2658d2c05aedc0568"
};

// Initialize firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app);

export { auth }
