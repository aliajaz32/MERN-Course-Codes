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

export {
  addAds
}