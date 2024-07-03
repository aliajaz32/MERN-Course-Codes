//Component
//export
//img
//button
//onclick function and function itself
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register, login } from '../../config/firebase'
import { addUser } from '../../store/actions'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const onSignin = async () => {
    try {
      const user = await login(email, password)
      console.log('user -->', user)
      alert('Successfully Logged in Component')

      dispatch(addUser(user))
      navigate('/profile')
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="column">
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Write email here" />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Write password here" />
      <br />
      <button onClick={onSignin}>Login</button>
      <p onClick={() => navigate('/register')}>New user? Register here</p>
    </div>
  )
}

export default Signup