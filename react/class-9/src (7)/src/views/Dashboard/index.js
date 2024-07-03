import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAds } from '../../config/firebase'
import CustomBtn from '../../components/CustomBtn'

function Dashboard() {
  const [ads, setAds] = useState([])
  const navigate = useNavigate()

  useEffect(async () => {
    const tempAds = await getAds()
    setAds(tempAds)
  }, [])

  console.log('ads --->', ads)
  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1> Dashboard </h1>
      <CustomBtn onClick={() => alert('Hello World')} title="Chamatein" />

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