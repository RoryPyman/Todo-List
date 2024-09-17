// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjUM4tctPeTSBS5NLVQ3QVl5zWxN5spBk",
  authDomain: "todo-list-b288f.firebaseapp.com",
  databaseURL: "https://todo-list-b288f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-list-b288f",
  storageBucket: "todo-list-b288f.appspot.com",
  messagingSenderId: "837756736896",
  appId: "1:837756736896:web:7bf75b1c7b6045da9ddd65"
};

// Initialize Firebase
const cong = initializeApp(firebaseConfig);

export default cong;