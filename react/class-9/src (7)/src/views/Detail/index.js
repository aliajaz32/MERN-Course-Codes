import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const params = useParams()
  console.log('params --->', params.adId)

  useEffect(() => {
    //call firebase get function here
    //getAdDetail(params.adId)
  }, [])

//adId
  return (
    <div>
      <h1> Detail </h1>
    </div>
  )
}

export default Detail