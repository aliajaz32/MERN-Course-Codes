import { useState } from 'react'
import { uploadImageToStorage, uploadImagesToStorage } from '../../config/firebase'

export default function Profile() {
  const [images, setImages] = useState([])

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

    <input type="file" onChange={(e) => setImages(e.target.files)} multiple/>
    <button onClick={uploadImage}>Submit</button>
  </div>
}