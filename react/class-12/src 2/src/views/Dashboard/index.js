import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addAds } from '../../store/ads/adAction'
import { getAds } from '../../config/firebase'
import CustomBtn from '../../components/CustomBtn'

function Dashboard() {
  // const [ads, setAds] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(state => state.userReducer.user)
  const ads = useSelector(state => state.adReducer.ads)
  console.log('user from Dashboard component', user)
  console.log('ads from Dashboard component', ads)

  useEffect(async () => {
    // const tempAds = await getAds()
    dispatch(addAds())
    // console.log('tempAds --->', tempAds)
    // setAds(tempAds)
  }, [])

  // const getRealtimeAds = () => {
  //   onSnapshot(collection(db, "ads"), (querySnapshot) => {
  //     const ads = []
  //     querySnapshot.forEach((doc) => {
  //       console.log('doc --->', doc.data())
  //       ads.push({ ...doc.data(), id: doc.id })
  //     })
  //     setAds(tempAds)
  //   })
  // }

  console.log('ads --->', ads)
  return (
    <div style={{ backgroundColor: 'red' }}>
      <img src="https://pbs.twimg.com/media/FNZ0dvmXwAU6AQn.jpg" width="300" />
      <h1> Dashboard </h1>
      {/*chain operator*/}
      <h1>{user?.fullname}</h1>
      {/* <h1>{user && user.fullname}</h1> */}
      {ads.map(item => {
        const { images, title, price, id } = item

        //template literals
        return <div
          // onClick={() => {navigate('/detail/' + id)}}
          onClick={() => { navigate(`/detail/${id}`) }}
          style={{ background: 'gray', margin: 30 }}>
          <img src={images[0]} width="200" />
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
      })}
    </div>
  )
}

export default Dashboard


/*
  React Native:

  1. React Native CLI:
  Pros:
  Cons:

  2. Expo:
  Pros:
  Cons:
*/