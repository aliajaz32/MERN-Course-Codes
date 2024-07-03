import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { uploadImageToStorage, uploadImagesToStorage } from '../../config/firebase'

export default function Profile() {
  const [images, setImages] = useState([])

  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  console.log('user from state inside Profile', user)

  const uploadImage = async () => {
    try {
      const urls = await uploadImagesToStorage(images)
      console.log('url from component', urls)
      alert('Successful Hogya')
    } catch (e) {
      alert(e.message)
    }
  }

  return <div style={{ backgroundColor: 'green' }}>
    <h1>Profile Page</h1>
    <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    <input type="file" onChange={(e) => setImages(e.target.files)} multiple/>
    <button onClick={uploadImage}>Submit</button>
  </div>
}