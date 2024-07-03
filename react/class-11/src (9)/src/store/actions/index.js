import { db } from '../../config/firebase'
import { collection, onSnapshot } from "firebase/firestore";

function addAds() {
  return (dispatch) => {
    onSnapshot(collection(db, "ads"), (querySnapshot) => {
      const ads = []
      querySnapshot.forEach((doc) => {
        ads.push({ ...doc.data(), id: doc.id })
      })
      dispatch({
        type: 'ADD_ADS', //nishani
        payload: ads
      })
    }) //redux-thunk
  }
}

function addUser(user) {
  console.log('action --->' , user)
  return {
    type: 'ADD_USER', //nishani
    payload: user
  }
}

function removeUser() {
  return {
    type: 'REMOVE_USER'
  }
}

export {
  addAds,
  addUser,
  removeUser
}