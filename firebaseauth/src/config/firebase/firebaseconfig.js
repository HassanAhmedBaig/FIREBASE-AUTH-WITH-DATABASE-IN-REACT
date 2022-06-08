// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoucNjuVUrU3u0FFqulU7jrX7-IQQcjUo",
  authDomain: "fir-auth-in-react.firebaseapp.com",
  databaseURL: "https://fir-auth-in-react-default-rtdb.firebaseio.com",
  projectId: "fir-auth-in-react",
  storageBucket: "fir-auth-in-react.appspot.com",
  messagingSenderId: "1076732129987",
  appId: "1:1076732129987:web:c5fe91f405e0c461f4a876",
  measurementId: "G-3084QH0S91"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;