// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4b6VKJ0cV_gz8XEvYR9_ZhndZfEmAHvQ",
  authDomain: "ex-ms14.firebaseapp.com",
  projectId: "ex-ms14",
  storageBucket: "ex-ms14.appspot.com",
  messagingSenderId: "871474607777",
  appId: "1:871474607777:web:c42c001c5311231add22e0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

function register(email, password) {
//Asynchoronous functions
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert('Successfully Registered')
    // Signed in 
    const user = userCredential.user;
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
}

function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('Successfully Logged In')
    console.log('user --->', user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  })
}

export {
  register,
  login
}

