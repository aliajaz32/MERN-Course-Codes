// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, doc, addDoc, setDoc, getDocs } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDykNJIm_vrJFquBCuxe-LM5Yrtn_OzHrQ",
  authDomain: "ex-ms13.firebaseapp.com",
  projectId: "ex-ms13",
  storageBucket: "ex-ms13.appspot.com",
  messagingSenderId: "192097505587",
  appId: "1:192097505587:web:088aac5ce4deaf0cd52e46"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

/*
 1. Synchronous
 2. Asynchorous
*/

/*
 1. Jharo lagana
 2. Chaye banana
 3. Bartan Manjna
*/

async function register(email, password, fullname, phoneNumber) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const uid = userCredential.user.uid
    await setDoc(doc(db, "users", uid), {
      email,
      fullname,
      phoneNumber
    })
    alert('Successfully Registered and added in database')
  } catch (e) {
    alert(e.message)
  }

}


// function register(email, password, fullname, phoneNumber) {
// //Asynchoronous functions
//   alert('Chae Banana start')
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     alert('Chae Banana complete')


//     alert('Successfully Registered')
//     // Signed in 
//     const uid = userCredential.user.uid;
//     console.log('uid --->', uid)
//     // ...

  

//     /* firestore data adding 2 methods:
//      1. addDoc - Data add kardo with Random ID
//      2. setDoc - Data add kardo with my provided ID
//     */

//     /* Previously */
//     // addDoc(collection(db, "users"), {
//     //   email,
//     //   fullname,
//     //   phoneNumber
//     // }).then(() => {
//     //   alert('Added in database')
//     // }).catch(e => {
//     //   alert('Not added in database')
//     // })

//     setDoc(doc(db, "users", uid), {
//       email,
//       fullname,
//       phoneNumber
//     })
//     .then(() => {
//       alert('Added in database')
//     }).catch(e => {
//       alert('Not added in database')
//     })
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//     // ..
//   });
//   alert('Bartan Manjana')
// }

async function login(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    alert('Successfully LoggedIn')
    return user
  } catch (e) {
    alert(e.message)
  }
}

// function login(email, password) {
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     alert('Successfully Logged In')
//     console.log('user --->', user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//   })
// }

async function getAds() {
  const querySnapshot = await getDocs(collection(db, "ads"))
  const ads = []
  querySnapshot.forEach((doc) => {
    ads.push({ ...doc.data(), id: doc.id })
  })
  return ads
}

async function getAdDetails(adId) {
  
}

export {
  register,
  login,
  getAds,
  getAdDetails
}

